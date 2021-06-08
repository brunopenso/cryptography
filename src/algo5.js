const util = require('./util')

const keyphraseLocal = 'white'
function createMatrix () {
    const matrix = []
    matrix[0] = util.defaultAlphabet
    for (let i = 0; i < 26; i++) {
        matrix[i+1] = util.shiftAlphabet(i+1).split('')
    }
    return matrix
}

function calculateKeyphrase (textLength, keyphrase = keyphraseLocal) {
    let keyphrasePrepared = ''

    let index = 0
    let textLengthIndex = 0
    while (textLengthIndex < textLength) {
        if (keyphrase[index] === '' || keyphrase[index] === undefined) {
            index = 0
        }
        keyphrasePrepared += keyphrase[index]
        index++
        textLengthIndex++
    }
    return keyphrasePrepared
}

function encrypt (givenText, keyphrase = keyphraseLocal) {
    const textToEncrypt = givenText.split(' ').join('')
    const keyphrasePrepared = calculateKeyphrase(textToEncrypt.length, keyphrase)

    if (textToEncrypt.length !== keyphrasePrepared.length) {
        throw new Error('Some error occured when calculating the keyphrase size')
    }

    let encryptedText = ''
    const matrix = createMatrix()
    for (let i = 0; i < textToEncrypt.length; i++) {
        const char = textToEncrypt[i]
        const charKeyphrase = keyphrasePrepared[i]
        const alphabetPosition = util.alphabetPosition(charKeyphrase)
        const charPosition = util.alphabetPosition(char)

        const replacedChar = matrix[alphabetPosition][charPosition]
        encryptedText += replacedChar
    }

    return encryptedText
}

function decrypt (givenText, keyphrase = keyphraseLocal) {
    const textToDecrypt = givenText
    const keyphrasePrepared = calculateKeyphrase(textToDecrypt.length, keyphrase)

    if (textToDecrypt.length !== keyphrasePrepared.length) {
        throw new Error('Some error occured when calculating the keyphrase size')
    }

    let decryptedText = ''
    const matrix = createMatrix()
    for (let i = 0; i < textToDecrypt.length; i++) {
        const char = textToDecrypt[i]
        const charKeyphrase = keyphrasePrepared[i]
        const alphabetPosition = util.alphabetPosition(charKeyphrase)
        const charPosition = util.alphabetPosition(char, matrix[alphabetPosition])

        const replacedChar =util.defaultAlphabet[charPosition]
        decryptedText += replacedChar
    }

    return decryptedText
}

console.log(decrypt('zpdxvpazhslzbhiwzbkmznm'))

module.exports = {
    createMatrix,
    calculateKeyphrase,
    encrypt,
    decrypt
}
