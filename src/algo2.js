const alphabet = require('./alphabet')

const alphabet1 = ['a', 'd', 'h', 'i', 'k', 'm', 'o', 'r', 's', 'u', 'w', 'y', 'z']
const alphabet2 = ['v', 'x', 'b', 'g', 'j', 'c', 'q', 'l', 'n', 'e', 'f', 'p', 't']

if (alphabet1.length !== alphabet2.length) {
    throw new Error('Invalid encrypt message')
}

function crypt(givenText) {
    let text = ''
    for (const char of givenText) {
        const char1 = alphabet.alphabetPosition(char, alphabet1)
        const char2 = alphabet.alphabetPosition(char, alphabet2)

        if (char1 !== undefined) {
            text += alphabet2[char1]
        } else if (char2 !== undefined) {
            text += alphabet1[char2]
        } else {
            text += char
        }
    }
    return text
}

module.exports = {
    crypt
}