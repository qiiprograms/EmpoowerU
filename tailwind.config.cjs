module.exports = {
content: ['./index.html', './src/**/*.{js,jsx}'],
theme: {
extend: {
colors: {
primary: '#00E5FF',
secondary: '#A855F7',
bgstart: '#0A0F1F',
bgend: '#111827'
},
fontFamily: {
heading: ['Orbitron', 'sans-serif'],
body: ['Inter', 'sans-serif']
},
boxShadow: {
'neon': '0 6px 30px rgba(0,229,255,0.08), 0 0 40px rgba(168,85,247,0.06)'
}
}
},
plugins: []
}