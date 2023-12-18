import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    login(username.value, password.value);
  };

  const randomPokemon = Math.floor(Math.random() * 17 + 1);

  return (
    <section
      className="grid md:grid-cols-2 place-items-center min-h-screen"
      style={{
        backgroundImage: "url('/assets/login-background.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="row-start-3 md:row-start-1">
        <h1 className="hidden md:inline-block text-[3rem] text-center font-extrabold text-emerald-200">
          Pokédu - Jaume Viladoms
        </h1>
        <div className="md:h-[50rem]">
          <img
            src={`/gifs-pokedu/${randomPokemon}.gif`}
            className="w-[600px] m-auto"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
      </div>
      <h1 className="md:hidden text-4xl text-center font-bold">
        Pokédu - Jaume Viladoms
      </h1>
      <form
        className="bg-light2 h-[40rem] rounded-xl border-2 border-black w-8/12 mt-10"
        style={{ boxShadow: "0 0 20px black" }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl text-center mt-20 mb-20">Login</h2>
        <div className="flex flex-col text-4xl">
          <div className="input-wrapper">
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder=""
              id="login-username"
            />
            <label htmlFor="login-username">
              <i className="text-xl md:text-4xl">Username</i>
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
              <i className="text-xl md:text-4xl">Password</i>
            </label>
          </div>
          <button className="rounded-3xl bg-success m-auto p-5">Login</button>
        </div>
      </form>
    </section>
  );
};
