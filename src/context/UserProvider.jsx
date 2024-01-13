import axios from "axios";
import React from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(localStorage.getItem("user") || null);
  const [token, setToken] = React.useState(
    localStorage.getItem("token") || null
  );

  const login = async (username, pass) => {
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

  const changePhoto = (photo) => {
    axios.put("/api/users", {
      userId: user.id,
      userFoto: photo,
    });

    setUser((prev) => ({ ...prev, foto: photo }));

    localStorage.setItem("user", JSON.stringify({ ...user, foto: photo }));
  };

  return (
    <UserContext.Provider value={{ user, login, token, logout, changePhoto }}>
      {children}
    </UserContext.Provider>
  );
};
