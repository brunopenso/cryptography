const alphabet = require('./alphabet')

function encrypt(givenText) {
    console.log(`Encrypting this text ${givenText}`)

    let textToEncrypt = ''

    const textToWork = givenText.toLocaleLowerCase()
    for (let i = 0; i < textToWork.length; i++) {
        const char = textToWork.charAt(i)
        if (alphabet.default.indexOf(char) >= 0) {
            textToEncrypt += char
        }
    }

    console.log(`The text that will be encrypt is ${textToEncrypt}`)

    const textToEncryptArray = textToEncrypt.split('')
    let railFenceLine1 = ''
    let railFenceLine2 = ''
    for (let i = 0; i < textToEncryptArray.length; i++) {
        const char = textToEncryptArray[i]
        if (i % 2 === 0) {
            railFenceLine1 += char
        } else {
            railFenceLine2 += char
        }
    }

    console.log(`Line 1: ${railFenceLine1}`)
    console.log(`Line 2: ${railFenceLine2}`)

    return railFenceLine1+railFenceLine2
}

const myText = 'Thy secret is thy prisoner: if thou let it go, thou art a prisoner to it'

const result = encrypt(myText)

console.log(`Encrypted text: ${result}`)
