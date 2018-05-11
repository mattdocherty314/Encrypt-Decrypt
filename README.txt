---=== OVERVIEW ===---
This is a simple Encryption and Decryption Python3 script used to encrypt simple text.

---=== DEBUGGING ===---
This program has been tested on Python 3.6.5 without any issues. If you run into any
errors please make sure you are on this version because it is known to work. If you
still are having issues on the aforementioned version, just send me a message on my
GitHub page (https://github.com/mattdocherty314)

---=== PROGRAM USE ===---
When asked to encrypt/decrypt you have three options (There is no shorthand, you must
put the entire string:
encrypt - Encrypt the using the following parameters
decrypt - Decrypt the using the following parameters
exit - End the loop
When asked for a key, it is just a set of valid characters (see below) used to encrypt/
decrypt the phrase
When asked for a phrase is the same form of input as the key.
The valid characters ('*', where * is the character) are: '0', '1', '2', '3', '4', '5',
'6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z', ')', '!', '@', '#', '$', '%', '^', '&', '*', '(', '`', '~', '-', '_', '=', '+',
'[', '{', ']', '}', '|', ';', ':', ',', '<', '.', '>', '/', '?', '\'', '"', '\\' & ' '.

---=== VERSION HISTORY ===---
---> v1.0.0
- Added the base encryption/decryption function

---> TODO
- Allow the program to be run within the terminal
- Support for larger strings
- More error catching
- Better comments in code
- Ability to encrypt files.
