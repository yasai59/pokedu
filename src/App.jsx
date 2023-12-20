import "./App.css";
import axios from "axios";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  axios.defaults.baseURL = "http://localhost:8080";

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
