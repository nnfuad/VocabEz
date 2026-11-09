import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        duo: {
          green: { DEFAULT: "#58CC02", hover: "#46A302", border: "#58A700", light: "#D7FFB8" },
          orange: { DEFAULT: "#FF9600", hover: "#E08500", border: "#CC7900", light: "#FFE8D1" },
          red: { DEFAULT: "#FF4B4B", hover: "#EA2B2B", border: "#D92323", light: "#FFDFE0" },
          blue: { DEFAULT: "#1CB0F6", hover: "#1899D6", border: "#1482BA", light: "#DDF4FF" },
          purple: { DEFAULT: "#CE82FF", hover: "#B866FF", border: "#9B4BE6", light: "#F5E6FF" },
          yellow: { DEFAULT: "#FFC800", hover: "#E6B400", border: "#CCA000", light: "#FFF5CC" },
          gray: { light: "#F7F7F7", border: "#E5E5E5", text: "#777777", dark: "#4B4B4B" },
          dark: { bg: "#131F24", card: "#202F36", border: "#37464F", text: "#F3F4F6" },
        },
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        "tactile-green": "0 4px 0 #58A700",
        "tactile-gray": "0 4px 0 #CECECE",
        "tactile-blue": "0 4px 0 #1482BA",
        "tactile-orange": "0 4px 0 #CC7900",
        "tactile-red": "0 4px 0 #D92323",
        "tactile-purple": "0 4px 0 #9B4BE6",
      },
    },
  },
  plugins: [],
};

export default config;
