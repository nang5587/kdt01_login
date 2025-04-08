/** @type {import('tailwindcss').Config} */

module.export = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          moirai: ["'MoiraiOne-Regular'", "cursive"], // Tailwind에서 font-moirai 로 사용
        },
        animation: {
            typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
        },
        keyframes: {
            typing: {
              "0%": {
                width: "0%",
                visibility: "hidden"
              },
              "100%": {
                width: "100%"
              }
            },
            blink: {
              "50%": {
                borderColor: "transparent"
              },
              "100%": {
                borderColor: "white"
              }
            }
          },
      },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
  };
  