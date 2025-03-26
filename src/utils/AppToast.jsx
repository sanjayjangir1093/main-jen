import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const SuccessToast = (message, description, pauseOnHover) => {
  notification.open({
    message: message,
    description: description,
    icon: <SmileOutlined style={{ color: "green" }} />,
  });
};

const ErrorToast = (message, description) => {
  notification.open({
    message: message,
    description: description,
    icon: <SmileOutlined style={{ color: "red" }} />,
  });
};

const WarningToast = (message, description, pauseOnHover) => {
  notification.open({
    message: message,
    description: description,
    icon: <SmileOutlined style={{ color: "#F96E2A" }} />,
  });
};

const ShowInputError = ({ errorMessage }) => {
  return <span style={{ color: "red" }}>{errorMessage}</span>;
};

export { SuccessToast, ErrorToast, ShowInputError, WarningToast };
