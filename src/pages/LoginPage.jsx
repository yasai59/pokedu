import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import  "../fonts.css";

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    login(username.value, password.value);
  };

  const randomPokemon = (Math.floor(Math.random() * 536) + 1).toString().padStart(3, '0');

  return (
    <section
      className="grid lg:grid-cols-2 place-items-center min-h-screen"
      style={{
        backgroundImage: "url('/assets/login-background.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        
      }}
    >
      <div className="row-start-3 lg:row-start-1">
        
        <div className="lg:h-[50rem]">
        <h1 className="hidden lg:inline-block text-[4rem] text-center font-extrabold font-nds ml-[100px] mb-[100px] text-[#e6dbda] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)] ">
          Pokédu - Jaume Viladoms
        </h1 >
          <img
            src={`/gifs-pokedu/${randomPokemon}.gif`}
            className="w-[700px] h-[450px] lg:ps-[180px]  "
            style={{ imageRendering: "pixelated" }}
          />
        </div>
      </div>
      <h1 className="lg:hidden text-4xl text-center font-bold font-nds mt-5  text-[#e6dbda] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)]">
        Pokédu - Jaume Viladoms
      </h1>
      <form
        className="bg-light2  mt-[20px] h-[30rem] md:h-[35rem] rounded-xl border-2 border-black w-8/12"
        style={{ boxShadow: "0 0 20px black" }}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col text-4xl pt-[20%]  h-[100%] bg-[#f1ecec]]">
          <div className="input-wrapper">
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder=""
              id="login-username"
            />
            <label htmlFor="login-username">
              <i className="text-xl md:text-4xl font-aldrich">Username</i>
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder=""
              id="login-password"
            />
            <label htmlFor="login-password">
              <i className="text-xl md:text-4xl font-aldrich">Password</i>
            </label>
          </div>
          <button className="rounded-3xl bg-success m-auto p-3 font-nds font-bold md:w-[300px] w-[200px] text-[1.2em]">Login</button>
        </div>
      </form>
    </section>
  );
};
