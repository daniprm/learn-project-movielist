import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: "#EEEEEE",
          accent: "#CA3E47",
          secondary: "#FEF3E2",
          dark: "#313131",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
