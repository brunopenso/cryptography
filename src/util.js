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

function alphabetPosition (charToFind, array = alphabetString) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === charToFind) {
            return i
        }
    }
    return undefined
}


module.exports = {
    defaultAlphabet: getAlphabet(),
    getAlphabet,
    shiftAlphabet,
    alphabetPosition
}
