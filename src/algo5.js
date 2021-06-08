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
    let keyphrasePrepared = ''

    let index = 0
    for (const char of textToEncrypt) {
        if (keyphrase[index] === '' || keyphrase[index] === undefined) {
            index = 0
        }
        keyphrasePrepared += keyphrase[index]
        index++
    }
    return keyphrasePrepared
}

const myText = 'divert troops to east ridge'
console.log(encrypt(myText))
module.exports = {
    createMatrix,
    calculateKeyphrase
}
