/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                bg0: "#060606", 
                bg1: "#0b0b0b", 
                bg2: "#0f0f0f", 
                bg3: "#1e1e1e", 
                bg4: "#2a2a2a", 
                bg5: "#363636", 
                bg6: "#4d4d4d", 
                bg7: "#646464", 
                bg8: "#858585", 

                fg0: "#f0f0f0", 
                fg1: "#dadada", 
                fg2: "#a8a9ac", 
                fg3: "#848484", 
                fg4: "#4d4d4d", 
                fg5: "#363636", 
                fg6: "#2a2a2a", 
                fg7: "#1e1e1e", 
                fg8: "#0a0b0c", 

                br0: "#090909", 
                br1: "#121212", 
                br2: "#1e1e1e", 
                br3: "#2a2a2a", 
                br4: "#363636", 
                br5: "#4d4d4d", 
                br6: "#646464", 
                br7: "#808080", 
                br8: "#9ca3af"
            }
        }
    },
    plugins: [],
    darkMode: 'class'
}