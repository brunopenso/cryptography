const util = require('./util')

const cipherShift3 = util.shiftAlphabet(3)

function encrypt(givenText, cipher = cipherShift3) {
    let text = ''
    for(const char of givenText) {
        if (char === ' ') {
            text += char
        } else {
            const position = util.alphabetPosition(char)
            text += cipher[position]
        }
    }

    return text
}

function decrypt(givenText, cipher = cipherShift3) {
    let text = ''
    for(const char of givenText) {
        const position = util.alphabetPosition(char, cipher)
        if (position === undefined) {
            text += char
        } else {
            text += util.defaultAlphabet[position]
        }
    }

    return text
}

module.exports = {
    encrypt,
    decrypt
}