import "./App.css";
import axios from "axios";
import { AppRoutes } from "./router/AppRoutes";
import { useEffect } from "react";

function App() {
  axios.defaults.baseURL = "http://localhost:8080";

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
