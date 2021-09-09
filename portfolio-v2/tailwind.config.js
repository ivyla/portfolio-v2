const colors = require("tailwindcss/colors")

// tailwind.config.js
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            grey: "#676767",
            sage: "#8ABC90",
            primary: "#A28CD0"
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
}
