/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  safelist: [
    { pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/ },
    { pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/ },
    { pattern: /row-span-(1|2|3|4|5|6)/ },
    { pattern: /gap-(0|1|2|3|4|5|6|8|10|12|16|20|24)/ },
    { pattern: /p[trblxy]?-(0|1|2|3|4|5|6|8|10|12|16|20|24)/ },
    { pattern: /m[trblxy]?-(0|1|2|3|4|5|6|8|10|12|16|20|24)/ },
    { pattern: /rounded(-(none|sm|md|lg|xl|2xl|3xl|full))?/ },
    { pattern: /(bg|text|border|from|to|via)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /(bg|text|border)-(white|black)/ },
    "hidden","block","inline-block","flex","grid","contents",
  ],
  theme: { extend: {} },
  plugins: [],
};