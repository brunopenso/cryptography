const util = require('./util')
const algo3 = require('./algo3')

const keyphraseLocal = 'JULIUS CAESAR'

function getCypherAlphabet(keyphrase = keyphraseLocal) {
    const keyphrasePrepared = util.prepareKeyphrase(keyphrase)
    const lastPositionKeyphrase = util.alphabetPosition(keyphrasePrepared.charAt(keyphrasePrepared.length-1))
    const completeAlphabet = util.shiftAlphabet(lastPositionKeyphrase)
    let cypherAlphabet = keyphrasePrepared
    for (const char of completeAlphabet) {
        if (keyphrasePrepared.indexOf(char) === -1) {
            cypherAlphabet += char
        }
    }

    return cypherAlphabet
}

function encrypt (givenText) {
    return algo3.encrypt(givenText, getCypherAlphabet())
}

function decrypt (givenText) {
    return algo3.decrypt(givenText, getCypherAlphabet())
}

module.exports = {
    getCypherAlphabet,
    encrypt,
    decrypt
}