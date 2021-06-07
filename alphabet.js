function getAlphabet(c1 = 'a', c2 = 'z') {
    a = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return (a.slice(a.indexOf(c1), a.indexOf(c2) + 1)); 
}

module.exports = {
    default: getAlphabet(),
    getAlphabet
}
