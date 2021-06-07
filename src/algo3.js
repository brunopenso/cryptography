const alphabet = require('./alphabet').alphabetString

function shiftAlphabet(qtdy) {
    const part1 = alphabet.substr(0, qtdy)
    const part2 = alphabet.substr(qtdy, alphabet.length)
    return part2+part1
}

console.log(shiftAlphabet(3))