const { createMatrix, calculateKeyphrase, encrypt, decrypt } = require('../src/algo5')

test('matrix validation', async function() {
    const matrix = createMatrix()
    expect(matrix[0][0]).toBe('a')
    expect(matrix[1][0]).toBe('b')
    expect(matrix[2][0]).toBe('c')
    expect(matrix[3][0]).toBe('d')
    expect(matrix[4][0]).toBe('e')
    expect(matrix[5][0]).toBe('f')
    expect(matrix[6][0]).toBe('g')
    expect(matrix[7][0]).toBe('h')
    expect(matrix[8][0]).toBe('i')
    expect(matrix[9][0]).toBe('j')
    expect(matrix[10][0]).toBe('k')
    expect(matrix[11][0]).toBe('l')
    expect(matrix[12][0]).toBe('m')
    expect(matrix[13][0]).toBe('n')
    expect(matrix[14][0]).toBe('o')
    expect(matrix[15][0]).toBe('p')
    expect(matrix[16][0]).toBe('q')
    expect(matrix[17][0]).toBe('r')
    expect(matrix[18][0]).toBe('s')
    expect(matrix[19][0]).toBe('t')
    expect(matrix[20][0]).toBe('u')
    expect(matrix[21][0]).toBe('v')
    expect(matrix[22][0]).toBe('w')
    expect(matrix[23][0]).toBe('x')
    expect(matrix[24][0]).toBe('y')
    expect(matrix[25][0]).toBe('z')
    expect(matrix[26][0]).toBe('a')
})

test('calculateKeyphrase', async function() {
    let result = calculateKeyphrase(5)
    expect(result).toBe('white')

    result = calculateKeyphrase(7)
    expect(result).toBe('whitewh')

    result = calculateKeyphrase(10)
    expect(result).toBe('whitewhite')

    result = calculateKeyphrase(13)
    expect(result).toBe('whitewhitewhi')
})

test('run', async function () {
    const myText = 'divert troops to east ridge'
    console.log('Text: ', myText)

    const encrypted = encrypt(myText)
    console.log('Encrypted: ', encrypted)
    expect(encrypted).toBe('zpdxvpazhslzbhiwzbkmznm')

    const decrypted = decrypt(encrypted)
    console.log('Decrypted: ', decrypted)
    expect(decrypted).toBe('diverttroopstoeastridge')
})