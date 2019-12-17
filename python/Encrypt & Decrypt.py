import math

def main():
    while True:
        # --- ASK FOR ACTION --- #
        action = str(input("encrypt/decrypt: "))
        print("The following combination of key and phrase must not be longer than 128 characters long.")
        key = str(input("Key: "))
        phrase = str(input("The phrase to (en/de)crypt: "))
        # --- VALIDATE INPUT --- #
        if len(key)+len(phrase) >= 128:
            print("The combination of key and phrase must not be longer than 128 characters long.")
            main()
        # --- RUN ACTION --- #
        if action == "encrypt":
            print (encrypt(key, phrase))
        elif action == "decrypt":
            print (decrypt(key, phrase))
        elif action != "exit":
            print ("Enter a valid command.")
            main()
        else:
            break

# --- ENCRYPT --- #
def encrypt(key, phrase):
    # convert text to decimal and multiply then revert back to string
    keyDecimal = convertToBase(str(key), 95, 10)
    phraseDecimal = convertToBase(str(phrase), 95, 10)

    encryptDecimal = round(int(keyDecimal)*int(phraseDecimal))
    encryptMessage = convertToBase(str(encryptDecimal), 10, 95)

    return encryptMessage

# --- DECRYPT --- #
def decrypt(key, phrase):
    # convert text to decimal and devide then revert back to string
    keyDecimal = convertToBase(str(key), 95, 10)
    phraseDecimal = convertToBase(str(phrase), 95, 10)

    decryptDecimal = round(int(phraseDecimal)/int(keyDecimal))
    decryptMessage = convertToBase(str(decryptDecimal), 10, 95)

    return decryptMessage

# --- CONVERT BASE --- #
def convertToBase(number, baseOld, baseNew):	# MAXIMUM BASE: 95, MAXIMUM NUMBER: 95^128
    # alphanumeric characters found on keyboard
    symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e',
               'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
               'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
               'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
               'Y', 'Z', ')', '!', '@', '#', '$', '%', '^', '&', '*', '(', '`', '~', '-',
               '_', '=', '+', '[', '{', ']', '}', '|', ';', ':', ',', '<', '.', '>', '/',
               '?', '\'', '"', '\\', ' ']

    # convert text to decimal
    decimalNumber = 0
    startingColumn = baseOld**len(str(number))
    for d in number:
        startingColumn /= baseOld
        for s in range(len(symbols)):
            if str(d) is str(symbols[s]):
                decimalNumber += startingColumn * s

    # convert decimal into chars
    newNum = ""
    startNum = False
    for d in range(128, -1, -1):
        column = baseNew**d
        if not startNum and math.fmod(math.floor(decimalNumber/column), baseNew) > 0:
            startNum = True
        if startNum:
            newNum += symbols[int(math.fmod(math.floor(decimalNumber/column), baseNew))]

    return newNum

main()
