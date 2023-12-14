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
  const [user, setuser] = React.useState(null);
  const [token, setToken] = React.useState(null);

  const login = async (user, pass) => {
    try {
      const res = await axios.post("/api/users/login", {
        username: user,
        password: pass,
      });
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    axios.defaults.headers.common["Authorization"] = token;
  }, [token]);
  // TODO: Recuperar token y usuario
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  });

  return (
    <UserContext.Provider value={{ user, login, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
