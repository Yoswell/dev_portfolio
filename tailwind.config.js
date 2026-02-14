/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
    	extend: {
    		colors: {
    			bg0: '#080808',
    			bg1: '#0b0b0b',
    			bg2: '#0f0f0f',
    			bg3: '#1e1e1e',
    			bg4: '#2a2a2a',
    			bg5: '#363636',

    			fg0: '#f0f0f0',
    			fg1: '#dadada',
    			fg2: '#a8a9ac',
    			fg3: '#848484',
 
    			br0: '#090909',
    			br1: '#121212',
    			br2: '#1e1e1e',
    			br3: '#222222',
    			br4: '#363636',
    			br5: '#4d4d4d',
    		}
		}
    },
    plugins: [require("tailwindcss-animate")]
}