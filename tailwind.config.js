/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        blush: '#F2E8E1',
        rose: '#C9897A',
        'rose-deep': '#A8685A',
        charcoal: '#2C2C2C',
        sage: '#8A9E8C',
        muted: '#9A8B82',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
