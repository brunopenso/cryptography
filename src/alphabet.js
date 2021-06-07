const alphabetString = 'abcdefghijklmnopqrstuvwxyz'

function getAlphabet(c1 = 'a', c2 = 'z') {
    a = alphabetString.split('');
    return (a.slice(a.indexOf(c1), a.indexOf(c2) + 1)); 
}

function shiftAlphabet(qtdy) {
    const part1 = alphabetString.substr(0, qtdy)
    const part2 = alphabetString.substr(qtdy, alphabetString.length)
    return part2+part1
}
module.exports = {
    default: getAlphabet(),
    getAlphabet,
    shiftAlphabet,
}
