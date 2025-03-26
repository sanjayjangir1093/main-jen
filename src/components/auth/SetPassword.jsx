import { useState } from "react";
import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import "./SetPassword.css";
import { ErrorToast, SuccessToast } from "../../utils/AppToast";
import { post } from "../../services/services";
import { ApiURL } from "../../services/apiConstants";
import './auth.css';
import AntdInput from "../common/AntdInput";
import AntdButton from "../common/AntdButton";
import AntdLoader from "../common/AntdLoader";

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loader, set_loader] = useState(false);
  const navigate = useNavigate();
  const { email } = useParams();
  const [ApiErrors, set_ApiErrors] = useState({});
  const [disableSubmitButton, set_disableSubmitButton] = useState(false);
  
  

  // Password validation
  const validatePassword = () => {
    let newErrors = {};
    if (!password.trim()) {
      set_disableSubmitButton(true);
      newErrors.password = "Password is required";
    }
     else if (password.length < 6) {
      set_disableSubmitButton(true);
      newErrors.password = "Password must be at least 6 characters";
    }
    else if (confirmPassword && confirmPassword !== password) {
      set_disableSubmitButton(true);
      newErrors.confirmPassword = "Passwords do not match";
    }
    else {
      delete newErrors.password;
      delete newErrors.confirmPassword;
      set_disableSubmitButton(false);
    }
    setErrors(newErrors);
  };


  const SetPassword = async () => {
    setErrors('');
    set_disableSubmitButton(false);
    set_loader(true)
    try {
      // set_loader(true)
      const FORM_DATA = new FormData();
      FORM_DATA.append("password", password ?? "");
      FORM_DATA.append("password_confirmation", confirmPassword ?? "");
      FORM_DATA.append("email", atob(email));
      post(ApiURL.set_password, FORM_DATA).then((res) => {
        if (res?.status) {
          SuccessToast("Success message!!", res?.message);
          navigate("/");
          set_loader(false);
        } else {
          ErrorToast("set-password error:", "An error occurred during set password!");
          set_ApiErrors(res?.errors);
          set_loader(false);
        }
      });
    } catch (errors) {
      ErrorToast("Login error:", "An error occurred during login!");
    }
  };

  return (
    <>
    {loader ? <AntdLoader/> :
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
    <div className="w-full max-w-lg p-4 sm:p-6 md:p-8 bg-white border-1 border-[#4d008c] rounded-lg shadow-lg">
      <h2 className="text-2xl text-center text-[#4d008c] mb-4">Set Your Password</h2>
          <AntdInput label="Enter Password" type="password" placeholder="Enter your password" required={true} value={password}
           onChange={(e) => setPassword(e.target.value)} 
           errorMessage={ApiErrors.password && ApiErrors.password[0]}/>
          <AntdInput label="Confirm Password" type="password" placeholder="Confirm your password" required={true} value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
           errorMessage={ApiErrors.confirmPassword && ApiErrors.confirmPassword[0]}/>
        <AntdButton text="Submit" loading={loader} onClick={SetPassword}/>
        </div>
        </div>
        </>
        }
        </>
  );
};

export default SetPassword;
