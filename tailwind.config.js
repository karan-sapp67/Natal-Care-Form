/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B46C1",
        "primary-deep": "#553C9A",
        lavender: "#E9D8FD",
        "lavender-soft": "#F4E8FF",
        surface: "#F9F7FF",
        "surface-card": "#FFFFFF",
        "surface-tint": "#F7F0FF",
        ink: "#1A202C",
        muted: "#5B526A",
        outline: "#E2E8F0"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        ambient: "0 18px 50px rgba(107, 70, 193, 0.09)",
        press: "0 8px 24px rgba(107, 70, 193, 0.22)"
      }
    }
  },
  plugins: []
};
