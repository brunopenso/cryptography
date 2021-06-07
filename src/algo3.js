const alphabet = require('./alphabet')

const cipher = alphabet.shiftAlphabet(3)

function encrypt(givenText) {
    let text = ''
    for(const char of givenText) {
        if (char === ' ') {
            text += char
        } else {
            const position = alphabet.alphabetPosition(char)
            text += cipher[position]
        }
    }

    return text
}

function decrypt(givenText) {
    let text = ''
    for(const char of givenText) {
        if (char === ' ') {
            text += char
        } else {
            const position = alphabet.alphabetPosition(char, cipher)
            text += alphabet.default[position]
        }
    }

    return text
}

module.exports = {
    encrypt,
    decrypt
}