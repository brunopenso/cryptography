const { encrypt, decrypt } = require('../src/algo1')

test('run', async function () {
    const myText = 'Thy secret is thy prisoner: if thou let it go, thou art a prisoner to it'

    console.log('Text to encrypt:', myText)

    const result = encrypt(myText)

    console.log('Encrypted text:', result)
    expect(result).toBe('tyertshpioeitolttohurarsnrothsceityrsnrfhueigtoatpioeti')

    const result1 = decrypt(result)

    console.log('Decrypted message:', result1)
    expect(result1).toBe('thysecretisthyprisonerifthouletitgothouartaprisonertoit')
})