const { test, expect } = require('@jest/globals')
const util = require('../src/util')

test('getAlphabet', async function() {
    expect(util.getAlphabet()).toStrictEqual(util.defaultAlphabet)

    expect(util.getAlphabet('c', 'h')).toStrictEqual(['c','d','e','f','g','h'])
})

test('shiftAlphabet', async function() {
    expect(util.shiftAlphabet(3)).toBe('defghijklmnopqrstuvwxyzabc')

    expect(util.shiftAlphabet(5)).toBe('fghijklmnopqrstuvwxyzabcde')
})

test('alphabetPosition', async function() {
    expect(util.alphabetPosition('a')).toBe(0)
    expect(util.alphabetPosition('z')).toBe(25)

    expect(util.alphabetPosition('t', ['a', 'b', 'x', 't', 'p'])).toBe(3)
})

test('prepareKeyphrase', async function() {
    expect(util.prepareKeyphrase('JULIUS CAESAR')).toBe('juliscaer')
    expect(util.prepareKeyphrase('TTTT')).toBe('t')
})