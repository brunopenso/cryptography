const { expect } = require('@jest/globals')
const { crypt } = require('../src/algo2')

test('run', async function(){
    const text = 'meet at midnight'

    console.log('Text to encrypt:', text)

    const encrypted = crypt(text)

    console.log('Encrypted text :', encrypted)
    expect(encrypted).toBe('cuuz vz cgxsgibz')

    const decrypted = crypt(encrypted)
    console.log('Descrypted text:', decrypted)
    expect(decrypted).toBe(text)
})