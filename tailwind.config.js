/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'order-banner': "url('https://content.pancake.vn/1/fwebp/27/fd/2e/88/259584dc9fc0e161ea8aeaef85669136ed4cc223ce7a47aa0a74445d-w:564-h:564-l:43396-t:image/jpeg.jpg')",
      },
    },
  },
  plugins: [],
}