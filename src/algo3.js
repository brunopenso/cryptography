const util = require('./util')

const cipher = util.shiftAlphabet(3)

function encrypt(givenText) {
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

function decrypt(givenText) {
    let text = ''
    for(const char of givenText) {
        if (char === ' ') {
            text += char
        } else {
            const position = util.alphabetPosition(char, cipher)
            text += util.defaultAlphabet[position]
        }
    }

    return text
}

module.exports = {
    encrypt,
    decrypt
}