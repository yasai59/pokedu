/** @type {import('tailwindcss').Config} */
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f5f5f5",
        primary: "#5ABD8B",
        secondary: "#9C2952",
        ceciarmy: "#C5A400",
        dark: "#000100",
        quartiary: "#836231",
        error: "#BD628B",
        info: "#F6DE00",
        success: "#5BBD8B",
        light2: "#EFE9FA",
      },
    },
  },
  plugins: [
    require("daisyui"),
    iconsPlugin({
      collections: getIconCollections([
        "mdi",
        "lucide",
        "bxs",
        "material-symbols",
      ]),
    }),
  ],
  daisyui: {
    themes: ["light"],
  },
};
