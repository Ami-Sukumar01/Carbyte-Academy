import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#64748B', 
      },
      fontSize: {
        'custom': '19.39px',
      },
      lineHeight: {
        'custom': '23.47px',
      },
      spacing: {
        'boxSize': '100px',
        'smallBoxSize': '25px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
};

export default config;

