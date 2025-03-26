
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleSignIn = () => {
    const [errors, set_errors] = useState([]);
    const navigate = useNavigate(); 

    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login success', response);
        navigate('/dashboard');  
        const decode = jwtDecode(response.credential)
        console.log(decode);
    };
    
    const handleGoogleLoginFailure = (error) => {
        console.log('Google login error', error);
        set_errors({ try: ["Google login failed. Please try again."] });  
    };

    return (
        <>
            <div className="flex items-center justify-center mt-3">
                {/* <h1 className='text-2xl font-bold text-blue-500'>Google Sign-In</h1> */}
                <GoogleOAuthProvider clientId='322995076907-3hr7bf89nr45ugofgs7034kp6p9dflli.apps.googleusercontent.com'>
                    <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={handleGoogleLoginFailure}
                    />
                </GoogleOAuthProvider>
            </div>
            {errors?.try && <div style={{color: "red"}}>{errors?.try[0]}</div>}
        </>
    );
}

export default GoogleSignIn;
