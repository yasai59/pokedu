import axios from "axios";
import React from "react";

export const UserProvider = ({ children }) => {
  // User object:
  // {
  //   name: "",
  //   role: "",
  //   username: "",
  //   token: "",
  //   pfp: "",
  // }
  const [user, setuser] = React.useState();

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

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
