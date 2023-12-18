import axios from "axios";
import React from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  // User object:
  // {
  //   name: "",
  //   role: "",
  //   username: "",
  //   token: "",
  //   pfp: "",
  // }
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);

  const login = async (username, pass) => {
    console.log(username, pass);
    try {
      const res = await axios.post("/api/users/login", {
        userName: username,
        userPass: pass,
      });

      const { user, token } = res.data;
      setUser(user);
      setToken(token);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  React.useEffect(() => {
    axios.defaults.headers.common["Authorization"] = token;
  }, [token]);
  // TODO: Recuperar token y usuario
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setToken(token);
      setUser(JSON.parse(user));
    } else {
      logout();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, token, logout }}>
      {children}
    </UserContext.Provider>
  );
};
