const alphabetString = 'abcdefghijklmnopqrstuvwxyz'

/**
 * Return the alphabet between the chars
 * @param {char} c1 
 * @param {char} c2 
 * @returns alphabet array
 */
function getAlphabet(c1 = 'a', c2 = 'z') {
    a = alphabetString.split('');
    return (a.slice(a.indexOf(c1), a.indexOf(c2) + 1)); 
}

/**
 * Shift the alphabet to the right
 * @param {integer} qtdy 
 * @returns the entire alphabet shifted
 */
function shiftAlphabet(qtdy) {
    const part1 = alphabetString.substr(0, qtdy)
    const part2 = alphabetString.substr(qtdy, alphabetString.length)
    return part2+part1
}

/**
 * Discovery a char position in an array
 * @param {char} charToFind 
 * @param {array} array 
 * @returns position or undefined
 */
function alphabetPosition (charToFind, array = alphabetString) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === charToFind) {
            return i
        }
    }
    return undefined
}

/**
 * Remove all spaces and duplicated letters
 * @param {string} phrase 
 */
function prepareKeyphrase (phrase) {
    let text = phrase.toLowerCase().split(' ').join('')
    const array = [...new Set(text.split(''))]
    text = ''
    for (const char of array) {
        text += char
    }
    return text
}

/**
 * Count the frequency that a letter appear on a text
 * @param {string} text 
 */
function frequencyAnalysis (text) {
    const map = new Map()
    for(const char of text.toLocaleLowerCase()) {
        if(map.has(char)) {
            map.set(char, map.get(char)+1)
        } else {
            map.set(char, 1)
        }
    }
    for(const entry of map.entries()) {
        const percentage = (map.get(entry[0]) / text.length)*100
        map.set(entry[0], Math.round(percentage *100) / 100)
    }
    return map
}

module.exports = {
    defaultAlphabet: getAlphabet(),
    getAlphabet,
    shiftAlphabet,
    alphabetPosition,
    prepareKeyphrase,
    frequencyAnalysis
}
