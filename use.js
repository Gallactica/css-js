const {
    sheet,
    merge,
    minify,
    comma
} = require('./index')

const fs = require('fs')

const body = sheet([
    "body",
    "html",
], {
    "height": "100%",
    "background": "rgba(17, 36, 243, 0.255)",
    "font-family": comma(["'Courier New'", "Courier", "monospace"]),
    "color": "#F1A1B1",
    "margin": "0px"
})

const space = sheet([
    ["body", ".space"]
], {
    "background": "#000",
})

const star = sheet([
    ["body", ".space", '.star']
], {
    "background": "#FFFFFF",
    "position": "absolute",
    "left": "0px",
    "right": "0px",
    "width": "3px",
    "height": "3px",
    "animation": ["expansion", "2s", "linear", "infinite"]
})

const keyframes = sheet([
    ["@keyframes", "expansion"]
], {
    "0%": {
        "transform": "scale(1)"
    },
    "50%": {
        "transform": "scale(2)"
    },
    "100%": {
        "transform": "scale(1)"
    }
})

const css = merge(body, space, star, keyframes)

fs.writeFileSync('minify.css', minify(css))