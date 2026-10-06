import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0F172A", panel: "#1B2740", brand: { DEFAULT: "#E63946", dark: "#C92F3B", orange: "#FF3B30" } },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
export default config;
