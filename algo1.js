const alphabet = require('./alphabet')

function encrypt(givenText) {
    let textToEncrypt = ''

    const textToWork = givenText.toLocaleLowerCase()
    for (let i = 0; i < textToWork.length; i++) {
        const char = textToWork.charAt(i)
        if (alphabet.default.indexOf(char) >= 0) {
            textToEncrypt += char
        }
    }

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
    console.log('\tRail fence line 1', railFenceLine1)
    console.log('\tRail fence line 2', railFenceLine2)

    return railFenceLine1+railFenceLine2
}

function decrypt(givenText) {
    const line1 = givenText.substring(0, (givenText.length / 2)+1)
    const line2 = givenText.substring((givenText.length / 2)+1, givenText.length)
    
    let text = ''
    let currentLength = 0
    while(true) {
        const charLine1 = line1.charAt(currentLength)
        const charLine2 = line2.charAt(currentLength)
        if (charLine1 !== '') {
            text += charLine1
        }
        if (charLine2 !== '') {
            text += charLine2
        }
        if (charLine1 === '' && charLine2 === '') {
            break
        } else {
            currentLength++
        }
    }

    return text
}

const myText = 'Thy secret is thy prisoner: if thou let it go, thou art a prisoner to it'

console.log('Text to encrypt:', myText)

const result = encrypt(myText)

console.log('Encrypted text:', result)

const result1 = decrypt(result)

console.log('Decrypted message:', result1)