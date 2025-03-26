
import { useState, useEffect } from "react";
import { Button, Input, Spin } from "antd";
import { UserOutlined, MailOutlined, LoadingOutlined } from "@ant-design/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Navigate, useNavigate } from "react-router-dom"; 
import { post } from "../../services/services";
import { ApiURL } from "../../services/apiConstants";
import { ErrorToast, SuccessToast } from "../../utils/AppToast";
import "./auth.css";
import AntdInput from "../common/AntdInput";
import AntdButton from "../common/AntdButton";
import AntdLoader from "../common/AntdLoader";


const Registration = () => {
  const [email, set_email] = useState("");
  const [firstName, set_firstName] = useState("");
  const [lastName, set_lastName] = useState("");
  const [contact, set_contact] = useState("");
  const [errors, set_errors] = useState({});
  const [ApiErrors, set_ApiErrors] = useState({});
  const [loader, set_loader] = useState(false);
  const [debouncedEmail, setDebouncedEmail] = useState(email);
  const [debouncedContact, setDebouncedContact] = useState(contact);
  const [touched, set_touched] = useState({ email: false, contact: false });

  const navigate = useNavigate(); // Initialize the navigate hook

  // Debounce for email validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (email) setDebouncedEmail(email);
    }, 500);
    return () => clearTimeout(timer);
  }, [email]);

  // Debounce for contact validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (contact) setDebouncedContact(contact);
    }, 1000);
    return () => clearTimeout(timer);
  }, [contact]);

  useEffect(() => {
    if (touched.email) validateEmail(debouncedEmail);
  }, [debouncedEmail]);

  useEffect(() => {
    if (touched.contact) validateContact(debouncedContact);
  }, [debouncedContact]);

  // Email validation using regex
  const validateEmail = (value) => {
    set_ApiErrors('')
    let newErrors = { ...errors };
    if (!value.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      newErrors.email = "Enter a valid email address";
    } else {
      delete newErrors.email;
    }
    set_errors(newErrors);
  };

  // Contact validation using regex
  const validateContact = (value) => {
    set_ApiErrors('')
    let newErrors = { ...errors };
    if (!value.trim()) {
      newErrors.contact = "Contact is required";
    } else if (!/^\d{8,10}$/.test(value)) {
      newErrors.contact = "Enter a correct contact detail";
    } else {
      delete newErrors.contact;
    }
    set_errors(newErrors);
  };

  const Registration = async () => {
    set_loader(true);
    set_touched('');

    try {
        const FORM_DATA = new FormData();
        FORM_DATA.append("email", email ?? "");
        FORM_DATA.append("first_name", firstName ?? "");
        FORM_DATA.append("last_name", lastName ?? "");
        FORM_DATA.append("phone_no", contact ?? "");

        post(ApiURL.register, FORM_DATA).then((res) => {
            console.log("API URL:", ApiURL.register);
            console.log("API Response:", res);

            if (res?.status) {
                if (res?.is_email_verified) {
                    // Case 1: Email is verified → Move to Set Password
                    SuccessToast("Success", res?.message);
                    // navigate("/set-password/:email/" + btoa(email));
                    navigate(`/set-password/${btoa(email)}`);
                } else {
                    // Case 2: Email is NOT verified → Move to OTP Verification
                    ErrorToast("Verify Email", "Please verify your email before proceeding.");
                    navigate("/otp/" + btoa(email));
                }
            } else {
                set_touched('');
                ErrorToast("Registration Error", "Registration Error");
                set_ApiErrors(res?.errors);
            }
            set_loader(false);
        });
    } catch (errors) {
        ErrorToast("Registration Error", "An error occurred during registration!");
        set_loader(false);
    }
};

    

  return (
    <>
    {loader ? <AntdLoader/> :
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
    <div className="w-full max-w-lg p-4 sm:p-6 md:p-8 bg-white border-1 border-[#4d008c] rounded-lg shadow-lg">
      <h2 className="text-2xl text-center text-[#4d008c] mb-4">Sign Up</h2>
          <AntdInput label="First Name" type="text" placeholder="Enter your first name" required={true}  value={firstName}
             onChange={(e) => set_firstName(e.target.value)}
             errorMessage={ApiErrors?.first_name && ApiErrors?.first_name[0]}/>
          <AntdInput label="Last Name" type="text" placeholder="Enter your last name" required={true} value={lastName}
             onChange={(e) => set_lastName(e.target.value)} 
             errorMessage={ApiErrors?.last_name && ApiErrors?.last_name[0]}/>
          <AntdInput label="Email" type="email" placeholder="Enter your email" required={true}  value={email}
             onChange={(e) => { set_email(e.target.value)}}
             errorMessage={ApiErrors?.email && ApiErrors?.email[0]}/> 

          <div className="mb-4">
           <label className="block text-gray-700 text-sm font-normal mb-2">Contact <i style={{ color: "red" }}>*</i></label>
           <PhoneInput
            country={"sg"}
            value={contact}
            onChange={(value)=>set_contact(value)}
            inputStyle={{ width: "100%" }}
            specialLabel=""
            inputProps={{
              placeholder: "Contact"       
            }}
          />
           {ApiErrors?.phone_no && (
            <span style={{ color: "red", fontSize: "12px"  }}>{ApiErrors?.phone_no[0]}</span>
          )}
          {/* {touched.contact && errors?.contact && (
            <span style={{ color: "red"}}>{errors.contact}</span>
          )} */}
        </div>
        <AntdButton text="Sign Up" loading={loader} onClick={Registration}/>
          </div>
          </div>
          </>
}
</>
  );
};

export default Registration;
