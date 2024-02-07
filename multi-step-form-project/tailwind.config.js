/** @type {import('tailwindcss').Config} */
export default {
  content:["./src/**/*.{js,jsx,css,ts,tsx}"],
  theme: {
    extend: {
      color: {
        primaryCustom: {
          marineBlue: "#02295a",
          purplish: "#473dff",
          pastelBlue: "#adbeff",
          lightBlue: "#bfe2fd",
          strawBerry: "#ed3548",
        },
        neturalCustom: {
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
        sideBarDesktop:
          "url('/multi-step-form-project/src/resources/images/bg-sidebar-desktop.svg')",
        sideBarMobile:
          "url('/multi-step-form-project/src/resources/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
