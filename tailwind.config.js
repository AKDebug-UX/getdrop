module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      extend: {
        colors: {
          "locked-overlay":"linear-gradient(180deg, rgba(255, 255, 255, 0.00) 2.60%, #FFF 37.50%)",
          bnbcolor: "#F3BA2F",
          releasesbg: "rgba(235, 250, 250, 1)",
        },
      },
    },
  },
  plugins: [],
};
