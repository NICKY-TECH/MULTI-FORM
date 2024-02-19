/** @type {import('tailwindcss').Config} */
export default {
  content:["./src/**/*.{js,jsx,css,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      "primaryCustom": {
          marineBlue: "#02295a",
          purplish: "#473dff",
          pastelBlue: "#adbeff",
          lightBlue: "#bfe2fd",
          strawBerry: "#ed3548",
          cardHover:"rgba(173, 190, 255,0.3)",
          switcher:"rgba(173, 190, 255,0.2)",
          confirmHover:"rgba(71, 61, 255,0.6)",
          nextHover:"rgb(2, 41, 90,0.6)"
        },
     "neutralCustom": {
          coolGray: "#9699ab",
          lightGray: "#d6d9e6",
          Magnolia: "#f0f6ff",
          Alabaster: "#fafbff",
        },
      },
      fontFamily: {
        ubuntu: ["Ubuntu"],
      },
      backgroundImage: {
      "sideBarDesktop":"url('/src/resources/images/bg-sidebar-desktop.svg')",
      "sideBarMobile": "url('/src/resources/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
