import React, { use, useEffect, useState } from 'react';
import { Button, Checkbox, Input, Spin, notification } from 'antd';
import { EyeInvisibleOutlined, SmileOutlined, EyeTwoTone, LoadingOutlined } from '@ant-design/icons';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import AntdInput from '../common/AntdInput';
import AntdButton from '../common/AntdButton';
import { ErrorToast, SuccessToast } from '../../utils/AppToast';
import { ApiURL } from '../../services/apiConstants';
import { post } from '../../services/services';
import AntdLoader from "../common/AntdLoader";

const SetNewPassword = () => {
    const navigate = useNavigate();
    const { token, role } = useParams();

    const [check_token, set_check_token] = useState(false);
    const [password, set_password] = useState('');
    const [password_confirmation, set_password_confirmation] = useState('');
    const [remember, set_remember] = useState(false);
    const [loader, set_loader] = useState(false);
    const [ApiErrors, set_ApiErrors] = useState([]);
    const [user_data, set_user_data] = useState({});

    const check_token_api = async () => {
      
        set_loader(true);
        const FORM_DATA = new FormData();
        // const user_info = JSON.parse(localStorage.getItem("user_data"));
        FORM_DATA.append('token', token)
        FORM_DATA.append('role', role)
        post(ApiURL.check_password_token, FORM_DATA).then((res)=> {
            console.log("check");
            if(res?.status == true) {
                set_check_token(true)
                set_loader(false);
            }
              else {
                set_check_token(false)
                set_loader(false);
                set_ApiErrors(res?.errors);
              }
          });
    }
    
    useEffect(() => {
        check_token_api();
    }, [])
    // Set Password API
    const add_password = async () => {
        set_loader(true);
        const FORM_DATA = new FormData();
        FORM_DATA.append('token', token)
        FORM_DATA.append('password', password);
        FORM_DATA.append('role', role);
        FORM_DATA.append('password_confirmation', password_confirmation);
        post(ApiURL.reset_password, FORM_DATA).then((res)=> {
        // console.log(PASSWORD_API_RESPONSE)
        if (res?.status) {
            SuccessToast("Success", res?.message);
            set_loader(false);
            navigate('/')
        } else {
            set_ApiErrors(res?.errors);
            set_loader(false);
        }
    });
    };


    return (
        <>
        {loader ? <AntdLoader/> :
        <>
        {check_token ? 
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-lg p-4 sm:p-6 md:p-8 bg-white border-1 border-[#4d008c] rounded-lg shadow-lg">
          <h2 className="text-2xl text-center text-[#4d008c] mb-4">Reset Your Password</h2>
              <AntdInput label="Enter New Password" type="password" placeholder="Enter new password" required={true} value={password}
               onChange={(e) => set_password(e.target.value)}
               errorMessage={ApiErrors.password && ApiErrors.password[0]} />
              <AntdInput label="Confirm New Password" type="password" placeholder="Confirm new password" required={true} value={password_confirmation}
              onChange={(e) => set_password_confirmation(e.target.value)}
              errorMessage={ApiErrors.confirmPassword && ApiErrors.confirmPassword[0]}  />
            <AntdButton text="Submit" loading={loader} onClick={add_password}/>
            </div>
            </div>
             :
              <p style={{border:"1px solid #ccc", padding:"10px", maxWidth:"550px", margin:"100px auto", color:"red", fontWeight:"bold", fontSize:"20px", textAlign:"center" }}>Page Expired</p>
        }
        </>
        }
</>
    );
};

export default SetNewPassword;

