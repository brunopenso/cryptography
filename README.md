# Cryptography

This repo is part of my study of Cryptography.

I'm reading the book The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography (English Edition) and the book tells the history of the cryptography and I will implement some algos to test how this is done.

## Science of secret writing and its main branches

- Steganography (hidden)
- Cryptography (scrambled)
  - Substitution
    - Code (replace words)
    - Cipher (replace letters)
  - Transposition

## Transposition
*How it works:* 
- The letters of the message are simply rearranged
- Each letter retains its identity but changes its position

### Rail Fence Algorithm
Written with alternate letters on separate upper and lower lines and clue them together

See `algo1.js`

## Substitution
*How it works:*
- The letters of the message are changed following some rule
- Each letter changes its identity but retains its position

### Pair letters
Change each letter of the text considering the alphabet splited in half and randomly arranged between the sender and receiver

See `algo2.js`

### Caesar cipher
Change letters of the text considering a shift on the alphabet. ex: abcd > cdab

See `algo3.js`

### Caesar cipher - with keyphrase
The same as above but with keyphrase(keyword) removing all spaces and duplicate letters adding the rest of the alphabet in the order unless the letters of the keyphrase

See `algo4.js`

### Vigenère Square
Is a matrix of the alphabet shift 26 times one after the other. After that a keyphrase is informed to select each row of that matrix that will be used to replace each letter of the text that will be encrypted

See `algo5.js`