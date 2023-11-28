/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      lora: ["Lora", "serif"],
      playpen: ["Playpen Sans", "cursive"],
      robonto: ["Roboto Slab", "serif"],
      meri: ["Merienda", "cursive"],
      itim: ["Itim", "cursive"],
    },
    extend: {},
  },
  plugins: ["require('flowbite/plugin')"],
};
