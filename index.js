const minify = require('./lib/minify')
const sheet = require('./lib/sheet')

const merge = (...sheets) => sheets.join('\n')
const comma = (arr = []) => arr.map((v, i, a) => i < a.length - 1 ? v += "," : v)

module.exports = {
    minify,
    sheet,
    merge,
    comma
}