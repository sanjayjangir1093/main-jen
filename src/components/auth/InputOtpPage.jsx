
import { useState, useEffect } from "react";
import { Button, Flex, Form, Input } from "antd";
import { InputOTP } from "antd-input-otp";
import { useNavigate, useParams } from "react-router-dom";
import { ApiURL } from "../../services/apiConstants";
import { post } from "../../services/services";
import { ErrorToast, SuccessToast } from "../../utils/AppToast";
import AntdButton from "../common/AntdButton";
import AntdLoader from "../common/AntdLoader";

const OTPPage = () => {
  const { email } = useParams();
  const [otp, setOtp] = useState(""); 
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [loader, setLoader] = useState(false);
  const [otpError, setOtpError] = useState(""); 
  const navigate = useNavigate();
  const [resend_otp_loader, set_resend_otp_loader] =  useState(false);
  const [ApiErrors, set_ApiErrors] = useState({});

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleOTPChange = (value) => {
    console.log(value.length)
    // Reset error message initially
    setOtpError("");
  
    // Ensure only numbers are allowed
    if (!/^\d*$/.test(value)) {  
      setOtpError("Error: Only numbers are allowed!");
      return false;
    }
  
    setOtp(value);
  
    if (value.length < 6) {
      setOtpError("Please enter a valid 6-digit OTP");
    } else {
      setOtpError(""); 
    }
  
    return true;
  };


  const handleResendOtp = async () => {
    set_resend_otp_loader(true);
    try{
    const FORM_DATA = new FormData(); 
      FORM_DATA.append("email", atob(email));
      post(ApiURL.resend_otp, FORM_DATA).then((res)=> {;
      if(res?.status) {
        SuccessToast("Success", res?.message);
        setTimer(60); 
        setCanResend(false); 
        set_resend_otp_loader(false);
      } else {
        ErrorToast("Error message", res?.message);
        setOtpError(res?.errors);
        set_resend_otp_loader(false);
      }
    })
  }
  catch
  {
    set_resend_otp_loader(false);
    ErrorToast("Error message", res?.message);
  }
  };
 
  const handleSubmit = async () => {
    setLoader(true);
    setOtpError('')
    try {
    
          const FORM_DATA = new FormData();
          FORM_DATA.append("otp", Number(otp));
          FORM_DATA.append("email", atob(email));
    
          post(ApiURL.verify_email, FORM_DATA).then((res)=> {
          if(res?.status) {
            SuccessToast("Success", res?.message);
            navigate("/set-password/" + email); 
          }
            else {
              setOtpError(res?.message);
              ErrorToast("Error message", res?.message);
              set_ApiErrors(res?.errors);
              setLoader(false);
            }
        });
    } catch (error) {
      setLoader(false);
      ErrorToast("Error message", res?.message);
    }
  };


  return (
<>
{loader ? <AntdLoader/> :
<>
<div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
  <div className="w-full max-w-lg p-4 sm:p-6 md:p-8 bg-white border-1 border-[#4d008c] rounded-lg shadow-lg">
    <h2 className="text-2xl text-center text-[#4d008c] mb-4">Enter Otp</h2>
                   <div className="mb-4">
                   <Flex  gap="middle" align="flex-start" vertical>
                     <Input.OTP
                       style={{ margin: "auto" }}
                       maxLength={6}
                       placeholder="Enter Your OTP"
                       onChange={handleOTPChange}
                        value={otp}
                     />
                   </Flex>
                   {otpError && <p style={{ color: "red" ,textAlign:"center",fontSize:"12px",marginTop:"5px"}}>{otpError}</p>} 
                   {ApiErrors && <p style={{ color: "red", textAlign:"center",fontSize:"12px",marginTop:"5px" }}>{ApiErrors[0]}</p>} 
                   </div>
                   <div className="text-center"> <AntdButton text="Submit Otp" loading={loader} onClick={handleSubmit} disabled={resend_otp_loader || otpError} /></div>
                   <div style={{ marginTop: "10px", textAlign: "center" }}>
               {canResend ? (
                   <div className="text-center">
                    <Button type="link" className="resendotpbtn" onClick={handleResendOtp} loading={resend_otp_loader} >
                   Resend OTP
                 </Button>
                   </div>

               ) : (
                 <p style={{ color: "gray" }}>Resend OTP in {timer}s</p>
               )}
             </div>
     
  </div>
</div>
</>
}
</>
  );
};

export default OTPPage;



