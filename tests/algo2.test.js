const { expect } = require('@jest/globals')
const { encrypt, decrypt } = require('../src/algo2')

test('run', async function(){
    const text = 'meet at midnight'

    console.log('Text to encrypt:', text)

    const encrypted = encrypt(text)

    console.log('Encrypted text :', encrypted)
    expect(encrypted).toBe('cuuz vz cgxsgibz')

    const decrypted = encrypt(encrypted)
    console.log('Descrypted text:', decrypted)
    expect(decrypted).toBe(text)
})