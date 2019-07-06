module.exports = (selectors, style) => {
    var str = ps(selectors)
    return str + strfy(style, 0)
}

function ps(selectors) {
    let str = ""
    if (Array.isArray(selectors)) {
        for (var i in selectors) str += Array.isArray(selectors[i]) ? (str.length > 0 ? ", " : "") + selectors[i].join(' ') : (str.length > 0 ? ", " : "") + selectors[i]
    } else {
        return selectors
    }
    return str
}

function space(tab) {
    let s = ""
    for (let i = 0; i < tab; i++) s += ' '
    return s
}

function strfy(style, tab) {
    let str = "\n" + space(tab) + "{\n"
    for (var i in style) str += space(tab + 4) + i + (type(style[i]) != 2 ? ": " : ' ') + (type(style[i]) == 2 ? strfy(style[i], tab + 4) : type(style[i]) == 1 ? style[i].join(' ') : style[i]) + (type(style[i]) != 2 ? ";\n" : '\n')
    return str + space(tab) + "}"
}

function type(a) {
    return Array.isArray(a) ? 1 : typeof a == 'object' ? 2 : 0
}