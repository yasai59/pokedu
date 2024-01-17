import "./App.css";
import axios from "axios";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  axios.defaults.baseURL = "https://pokeduapi.yasai59.com";

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
