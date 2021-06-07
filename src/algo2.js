const alphabet1 = ['a', 'd', 'h', 'i', 'k', 'm', 'o', 'r', 's', 'u', 'w', 'y', 'z']
const alphabet2 = ['v', 'x', 'b', 'g', 'j', 'c', 'q', 'l', 'n', 'e', 'f', 'p', 't']

if (alphabet1.length !== alphabet2.length) {
    throw new Error('Invalid encrypt message')
}

function hasChar(array, charToFind) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === charToFind) {
            return i
        }
    }
    return undefined
}

function encrypt(givenText) {
    let text = ''
    for (const char of givenText) {
        const char1 = hasChar(alphabet1, char)
        const char2 = hasChar(alphabet2, char)

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

function decrypt(givenText) {
    return encrypt(givenText)
}

module.exports = {
    encrypt,
    decrypt
}