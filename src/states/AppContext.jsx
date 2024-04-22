import { createContext, useState } from "react";
import cookies from "react-cookies";
import BaseAPI, { endpoints } from "../api/BaseAPI";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (username, password) => {
    let response = await BaseAPI.post(endpoints["login"], {
      username: username,
      password: password,
    });
    console.log(response.data);
    let accessToken = response.data.access;
    cookies.save("access", accessToken);

    let user = await BaseAPI.get(endpoints["current_user"], {
      headers: {
        Authorization: `Bearer ${cookies.load("access")}`,
      },
    });

    console.log(user.data);
    cookies.save("user", user.data);

    navigate("/");
  };

  const contextValues = {
    user,
    handleLogin,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
