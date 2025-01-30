// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          // DEFAULT: '#F5F2EE', // Main primary color
          DEFAULT: "#F8E8D9", // Main primary color
          textColor: "#000000",
          // light: "#3B82F6", // Lighter shade of primary
          // dark: "#1E40AF", // Darker shade of primary
        },
        secondary: {
          // DEFAULT: '#400303', // Main secondary color
          // DEFAULT: '#260401',
          DEFAULT: "#042D29", // Main primary color
          // light: "#6EE7B7", // Lighter shade of secondary
          // dark: "#047857", // Darker shade of secondary
        },
        // accent: "#F59E0B", // Accent color
        // background: "#F3F4F6", // Background color
        // text: "#000000",
      },
    },
  },
  plugins: [],
};
