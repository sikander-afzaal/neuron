const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1647F3",
        lightGray: "#F4F9FF",
        slateGray: "#7C8893",
        header: "#ECF2F9",
        sectionBg: "#E9F3FF",
        footer: "#0D1A3B",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto"],
      },
      boxShadow: {
        deploy: "2.3472px 12.3472px 24.6944px rgba(0, 0, 0, 0.05)",
        heroImg: "5px 5px 15px rgba(74, 74, 74, 0.15)",
      },
    },
  },
  plugins: [],
};
