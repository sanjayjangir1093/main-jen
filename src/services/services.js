import instance from "./axiosInterceptors";

export const post = async (url, formData) => {
  const login_token = localStorage.getItem("login_token");
  formData.append("login_token", login_token ?? "");

  const options = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return instance
    .post(url, formData, options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const get = async (url) => {
  const options = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
  };
  return instance
    .get(url, options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const put = async (url, formData) => {
  const options = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
  };
  return instance
    .put(url, formData, options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const deleteApi = async (url) => {
  const options = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
  };
  // if (token) {
  //   options.headers.Authorization = `Bearer ${token}`;
  // }
  return instance
    .delete(url, options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

