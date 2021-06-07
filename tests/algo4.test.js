const { expect } = require('@jest/globals')
const { getCypherAlphabet, encrypt, decrypt} = require('../src/algo4')

test('test shift alphabet', async function () {
    const result = getCypherAlphabet('JULIUS CAESAR')
    expect(result).toBe('juliscaertvwxyzbdfghkmnopq')
})

test('run', async function () {
    const myText = 'my great text encrypted with a keyword'

    const encrypted = encrypt(myText)
    expect(encrypted).toBe('xp afsjh hsoh sylfpbhsi nrhe j vspnzfi')

    expect(decrypt(encrypted)).toBe(myText)
})