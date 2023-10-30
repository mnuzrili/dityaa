/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sss: "0.45rem",
      ss: "0.6rem",
      bs: "1rem",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animation-delay")],
};
