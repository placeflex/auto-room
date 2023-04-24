/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Добавляет кастомный цвет "my-color" в цветовую палитру
        "my-color": "#123456",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        // Добавляет новый размер шрифта "xl3" в список размеров шрифтов
        xl3: "2.25rem",
      },
      boxShadow: {
        // Добавляет новую тень "my-shadow" в список теней
        "my-shadow":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  // Определяет, какие варианты стилей будут созданы (например, ховеры, активы и т.д.)
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  // Плагины, которые добавляют дополнительные классы стилей
  plugins: [
    // require("@tailwindcss/forms"), // Добавляет стили для форм
    // require("@tailwindcss/typography"), // Добавляет стили для типографии
    // require("@tailwindcss/aspect-ratio"), // Добавляет классы для изменения соотношения сторон блоков
  ],
};
