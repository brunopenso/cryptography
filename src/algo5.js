const util = require('./util')

function createMatrix () {
    const matrix = []
    matrix[0] = util.defaultAlphabet
    for(let i = 0; i < 26; i++) {
        matrix[i+1] = util.shiftAlphabet(i+1).split('')
    }
    return matrix
}

module.exports = {
    createMatrix
}
