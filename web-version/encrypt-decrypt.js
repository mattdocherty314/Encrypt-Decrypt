function pageLoad() {
    let runButton = document.getElementById("run");
    runButton.addEventListener("click", main)
}

function main() {
    let typeSelectElement = document.getElementById("type");

    let choseTo = typeSelectElement.value;
    let values = getValues();

    if (values === null) {
        return;
    }

    if (choseTo === "Encrypt") {
        encrypt(values["key"], values["text"]);
    } else if (choseTo === "Decrypt") {
        decrypt(values["key"], values["text"]);
    }
}

function encrypt(key, text) {
    let encryptedNumber = parseInt(key) * parseInt(text);

    let outputElement = document.getElementById("output");
    outputElement.innerHTML = convertToBase(encryptedNumber.toString(), 10, 95);
}

function decrypt(key, text) {
    let decryptedNumber = parseInt(text) / parseInt(key);

    let outputElement = document.getElementById("output");
    outputElement.innerHTML = convertToBase(decryptedNumber.toString(), 10, 95);
}

function getValues() {
    let keyInputElement = document.getElementById("key");
    let textInputElement = document.getElementById("text");

    keyRawValue = keyInputElement.value;
    textRawValue = textInputElement.value;

    if ((keyRawValue.length+textRawValue.length) >= 128) {
        let outputElement = document.getElementById("output");
        outputElement.innerHTML = "The combination of key and phrase must not be longer than 128 characters long.";
        return null;
    }
    
    keyNumValue = convertToBase(keyRawValue, 95, 10);
    textNumValue = convertToBase(textRawValue, 95, 10);

    return {
        "key": keyNumValue,
        "text": textNumValue
    };
}

function convertToBase(number, baseOld, baseNew) {
    symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e',
               'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
               'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
               'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
               'Y', 'Z', ')', '!', '@', '#', '$', '%', '^', '&', '*', '(', '`', '~', '-',
               '_', '=', '+', '[', '{', ']', '}', '|', ';', ':', ',', '<', '.', '>', '/',
               '?', '\'', '"', '\\', ' '];
    numberDigits = number.split("");

    decimalNumber = 0;
    columnValue = Math.pow(baseOld, numberDigits.length);
    numberDigits.forEach(digit => {
        columnValue /= baseOld;
        for (s = 0; s < symbols.length; s++) {
            if (digit === symbols[s]) {
                decimalNumber += columnValue * s;
            }
        }
    });

    newNum = "";
    startNum = false;
    for (d = 128; d > -1; d--) {
        column = Math.pow(baseNew, d);
        if (!startNum && Math.fmod(Math.floor(decimalNumber/column), baseNew) > 0) {
            startNum = true;
        }
        if (startNum) {
            newNum += symbols[Math.fmod(Math.floor(decimalNumber/column), baseNew)]
        }
    }

    return newNum;
}

window.addEventListener("load", pageLoad);


// Code provided by: wteuber (https://gist.github.com/wteuber/6241786)
Math.fmod = function (a,b) {
    return Number((a - (Math.floor(a / b) * b)).toPrecision(8));
};