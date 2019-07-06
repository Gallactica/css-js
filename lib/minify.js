function v1(css) {
    var f = css.replace(/^\s+/gm, "")
        .replace(/([0-9]+\.[0-9]{2})([0-9]+)\%/gm, (t, f, w) => f + "%")
        .split('')
        .filter(v => v != "\n" && v != "\r")
        .filter((v, i, a) => (a[i - 1] + a[i] + a[i + 1]) != " 0.")
        .filter((v, i, a) => (a[i - 1] + a[i]) != ": ")
        .filter((v, i, a) => (a[i - 1] + a[i]) != ", ")
        .filter((v, i, a) => (a[i - 1] + a[i]) != "> ")
        .filter((v, i, a) => (a[i - 1] + a[i]) != "~ ")
        .filter((v, i, a) => (a[i] + a[i + 1]) != " {")
        .filter((v, i, a) => (a[i] + a[i + 1]) != " >")
        .filter((v, i, a) => (a[i] + a[i + 1]) != " ~")
        .filter((v, i, a) => (a[i] + a[i + 1] + a[i + 2] + a[i + 3]) != " !im")
        .filter((v, i, a) => (a[i] + a[i + 1]) != ";}")
    var r = f.join('').replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, "")
    return r
}

function v2(css) {
    var f = css
        .replace(/(^\s+)|([\n\r])/gm, "")
        .replace(/([0-9]+\.[0-9]{2})([0-9]+)\%/gm, (t, f, w) => f + "%")
        .split('')  
        .map((v, i, a) => {
            var a1 = a[i - 1] + a[i]
            if (a1 == ": " || a1 == ", " || a1 == "> " || a1 == "~ ") return null
            var a2 = a[i] + a[i + 1]
            if (a2 == ";}" || a2 == " {" || a2 == " >" || a2 == " ~") return null
            if (a2 + a[i + 2] + a[i + 3] == " !im") return null
            if (a[i - 1] + a2 == " 0." && +a[i + 2] != NaN) return null
            return v
        })
    return f.join('').replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, "")
}

module.exports = v2