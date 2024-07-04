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
      keyframes: {
        fluffy: {
          '0%, 100%': { transform: "translateY(0)", "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)" },
          '50%': { transform: "translateY(5%)", "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)" },
        },
        // typing: {
        //   "0%": {
        //     width: "0%",
        //     visibility: "hidden"
        //   },
        //   "100%": {
        //     width: "100%"
        //   }
        // },
        // blink: {
        //   "50%": {
        //     borderColor: "transparent"
        //   },
        //   "100%": {
        //     borderColor: "white"
        //   }
        // }
      },
      animation: {
        fluffy: "fluffy 1s infinite",
        // typing: "typing 2s steps(20) alternate"
        // typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
    },
  },
  plugins: [],
};
export default config;
