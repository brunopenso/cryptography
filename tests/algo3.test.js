const { expect } = require('@jest/globals')
const { encrypt, decrypt } = require('../src/algo3')

test('run', async function() {
    const myText = 'veni vidi vici'

    const encrypted = encrypt(myText)
    console.log('Encrypted text: ', encrypted)
    expect(encrypted).toBe('yhql ylgl ylfl')
    const decrypted = decrypt(encrypted)
    console.log('Decrypted text:', decrypted)
    expect(decrypted).toBe('veni vidi vici')
})