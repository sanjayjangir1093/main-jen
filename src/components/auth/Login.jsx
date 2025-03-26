import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Input, Spin } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
// import google_logo from "./images/google_logo.png";
import { useEffect } from "react";
import GoogleSignIn from "./GoogleSignIn";
import { post } from "../../services/services";
import { ApiURL } from "../../services/apiConstants";
// import { ErrorToast, SuccessToast } from "../../utils/AppToast";
import { ErrorToast, SuccessToast } from "../../utils/AppToast";
import Cookies from "js-cookie";
import AntdButton from "../common/AntdButton";
import AntdInput from "../common/AntdInput";
import AntdLoader from "../common/AntdLoader";

const Login = () => {
  const navigate = useNavigate();
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [remember, set_remember] = useState(false);
  const [loader, set_loader] = useState(false);
  const [errors, set_errors] = useState([]);
  const [accountblockError, set_accountBlockError] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");
    const rememberMeChecked = localStorage.getItem("rememberMe") === "true";

    if (rememberMeChecked && savedEmail && savedPassword) {
      set_email(savedEmail);
      set_password(savedPassword);
      set_remember(true);
    }
  }, []);

  const toggleChecked = (e) => {
    if (e.target.checked) {
      set_remember(!remember);
      document.cookie = `username=${email}`;
      document.cookie = `password=${password}`;
    } else {
      set_remember(!remember);
      document.cookie = "username=;";
      document.cookie = "password=;";
    }
  };

  const login = async () => {
    set_loader(true);
    try {
      
      const FORM_DATA = new FormData();
      FORM_DATA.append("email", email ?? "");
      FORM_DATA.append("password", password ?? "");
      post(ApiURL.login, FORM_DATA).then((res) => {
        if (res?.status) {
          const login_token = res?.data?.login_token;
          const role = res?.data?.role;
          localStorage.setItem("user_data", JSON.stringify(res));
          localStorage.setItem("login_token", login_token ?? "");
          // localStorage.setItem("role", role ?? "");
          SuccessToast("Success message!!", res?.message);
          if (remember) {
            Cookies.set("email", email);
            Cookies.set("password", password);
          } else {
            Cookies.remove("email");
            Cookies.remove("password");
          }
          // navigate("/customer-dasboard")
          navigate("/")
          set_loader(false);
        } else {
          ErrorToast("Login error:",  res?.message);
          set_errors(res?.errors);
          set_accountBlockError(res?.message);
          set_loader(false)

        }
      });
    }
       catch (errors) {
      ErrorToast("Login error:",  res?.message);
      set_loader(false)
    }
  };

  return (
    <>
{loader ? <AntdLoader/> :
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg p-4 sm:p-6 md:p-8 bg-white border-1 border-[#4d008c] rounded-lg shadow-lg">
        <h2 className="text-2xl text-center text-[#4d008c] mb-4">Login</h2>
        { accountblockError && 
        <p style={{color:"red", fontSize:"14px", textAlign:"center"}}>{accountblockError}</p>
           }
          <AntdInput label="Email" type="email" placeholder="Enter your email" required={true}  value={email}
               onChange={(e) => set_email(e.target.value)} 
                errorMessage={errors?.email && errors.email[0]}/>
          <AntdInput label="Password" type="password" placeholder="Enter your password" required={true} value={password}
              onChange={(e) => set_password(e.target.value)}  
              errorMessage={errors?.password && errors.password[0]} />

          <div className="flex flex-row ">
          <div className="remember-forgot-container">
             <Checkbox checked={remember} onChange={toggleChecked}>
               Remember Me
             </Checkbox>
            <span
               className="forgot-password"
               onClick={() => navigate("/forgot-password")}
             >
               Forgot Password?
             </span>
           </div>
          </div>
          <AntdButton text="Login" loading={loader} onClick={login} />
          <div className="login-extra">
             <p>
               Not a member?{" "}
               <span
                 className="register-link"
                 onClick={() => navigate("/sign-up")}
               >
                 Register
               </span>
             </p>
             {/* <p>or</p>
             <GoogleSignIn /> */}
           </div>
      </div>
    </div>
    </>
}
</>
  );
};

export default Login;
