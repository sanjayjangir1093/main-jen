import React, { useEffect, useState } from "react";
import { Button, Checkbox, Input, Spin, notification } from "antd";
import {
  EyeInvisibleOutlined,
  SmileOutlined,
  EyeTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./ForgotPassword.css";
import { ErrorToast, SuccessToast } from "../../utils/AppToast";
import { post } from "../../services/services";
import { ApiURL } from "../../services/apiConstants";
import './auth.css';
import AntdInput from "../common/AntdInput";
import AntdButton from "../common/AntdButton";
import AntdLoader from "../common/AntdLoader";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { token, type } = useParams();
  const [page_loader, set_page_loader] = useState(false);
  const [email, set_email] = useState("");
  const [loader, set_loader] = useState(false);
  const [errors, set_errors] = useState([]);

  const ForgotPassword = async () => {
    set_loader(true)
    try {
      const FORM_DATA = new FormData();
      FORM_DATA.append("email", email ?? "");
      post(ApiURL.forgot_password, FORM_DATA).then((res) => {
        if (res?.status) {
          SuccessToast("Success message!!", res?.message);
          navigate("/");
          set_loader(false);
        } else {
          ErrorToast("ForgotPassword error:", "An error occurred during ForgotPassword!");
          set_errors(res?.errors);
          set_loader(false)
        }
      });
    } catch (errors) {
      ErrorToast("ForgotPassword error:", "An error occurred during ForgotPassword!");
      set_loader(false)
    } 
  };

  return (
    <>
    {loader ? <AntdLoader/> :
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg p-4 sm:p-6 md:p-8 bg-white border-1 border-[#4d008c] rounded-lg shadow-lg">
        <h2 className="text-2xl text-center text-[#4d008c] mb-4">Forgot Password</h2>
        {errors?.try && (
             <>
               <span style={{ color: "red" }}>{errors?.try[0]}</span>
             </>
           )}
           {errors?.catch && (
             <>
               <span style={{ color: "red" }}>{errors?.catch[0]}</span>
             </>
           )}
          <AntdInput label="Enter Email Address " type="email" placeholder="Enter Email Address" required={true} 
          onChange={(e) => set_email(e.target.value)}
          errorMessage={errors?.email && errors?.email[0]}
          />
          <AntdButton text="Forgot Password" style={{ width: `${135}px` }}  loading={loader} onClick={ForgotPassword}/>
      </div>
    </div>
    </>
}
</>
  );
};

export default ForgotPassword;
