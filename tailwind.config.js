/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          moirai: ["'MoiraiOne-Regular'", "cursive"], // Tailwind에서 font-moirai 로 사용
        },
      },
    },
    plugins: [],
  };
  