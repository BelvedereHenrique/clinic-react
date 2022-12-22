/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        woman: "url('/src/assets/images/bg.png')",
        profile: "url('https://github.com/BelvedereHenrique.png')",
      }),
      backgroundColor: (theme) => ({
        bg: "#D3F7E2",
        lightBrown: "#ECE3DB",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
