const util = require('../src/util')

test('getAlphabet', async function() {
    expect(util.getAlphabet()).toStrictEqual(util.defaultAlphabet)

    expect(util.getAlphabet('c', 'h')).toStrictEqual('cdefgh')
})

test('shiftAlphabet', async function() {
    expect(util.shiftAlphabet(3)).toBe('defghijklmnopqrstuvwxyzabc')

    expect(util.shiftAlphabet(5)).toBe('fghijklmnopqrstuvwxyzabcde')
})