/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                darkBlue: "hsl(209, 23%, 22%)",
                darkBlueBg: "hsl(207, 26%, 17%)",
                lightGrayBg: "hsl(0, 0%, 98%)",
                lightModeText: "hsl(200, 15%, 8%)",
                darkGray: "hsl(0, 0%, 52%)",
                white: "hsl(0, 0%, 100%)",
                btnHover: "hsl(209, 23%, 30%)",
            },
            spacing: {
                headerHeight: "80px",
            },
        },
    },
    plugins: [],
};
