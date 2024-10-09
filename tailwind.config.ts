import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        michelinSky: "#C3EBFA",
        michelinSkyLight: "#EDF9FD", 
        michelinPurple: "#CFCEFF",
        michelinPurpleLight: "#F1F0FF", 
        michelinYellow: "#FAE27C",
        michelinYellowLight: "#FEFCE8", 
      },
      screens: {
        'lg+10': '1588px', // 自訂 1034px 的斷點
      },
    },
  },
  plugins: [],
};
export default config;
