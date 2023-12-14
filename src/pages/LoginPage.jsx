import React from "react";

export const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
  };

  const randomPokemon = Math.floor(Math.random() * 17 + 1);

  return (
    <section
      className="grid md:grid-cols-2 place-items-center min-h-screen"
      style={{
        backgroundImage: "url('/assets/login-background.png')",
        backgroundSize: "cover",
        background:
          "url('/assets/login-background.png') no-repeat center center fixed",
      }}
    >
      <div>
        <h1 className="text-4xl text-center">Pokédu - Jaume Viladoms</h1>
        <img
          src={`/gifs-pokedu/${randomPokemon}.gif`}
          className="w-[600px] m-auto"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
      <form
        className="bg-light2 h-[45rem] rounded-xl border-2 border-black w-8/12"
        style={{ boxShadow: "0 0 20px black" }}
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
          <button className="rounded bg-success m-auto p-5">Login</button>
        </div>
      </form>
    </section>
  );
};
