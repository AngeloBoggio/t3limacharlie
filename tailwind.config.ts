import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar-hide")],
} satisfies Config;
