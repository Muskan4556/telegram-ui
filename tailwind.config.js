/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "mobile-bg-color": "var(--mobile-bg-color)",
        "text-color": "var(--text-color)",
        "input-bg-color": "var(--input-bg-color)",
        "border-color": "var(--border-color)",
        "hover-bg": "var(--hover-bg)",
        "placeholder-color": "var(--placeholder-color)",
        "icon-color": "var(--icon-color)",
        "menu-hover-bg": "var(--menu-hover-bg)",
        "menu-hover-text": "var(--menu-hover-text)",
        "menu-hover-text-border": "var(--menu-hover-text-border)",
        "item-hover": "var(--item-hover)",
        "primaryColor": "var(--primaryColor)",
        "secondaryColor": "var(--secondaryColor)",
        "text-selected": "var(--text-selected)",
        "bgImg": "var(--bgImg)",
      },
    },
  },
  plugins: [],
};
