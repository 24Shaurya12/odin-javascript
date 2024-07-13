const palindromes = function (str) {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        let asciiCode = str.charCodeAt(i);
        if ((asciiCode >= 97 && asciiCode <= 122) || (asciiCode >=48 && asciiCode<=57)) {
            newStr.push(str[i]);
        }
        else if (asciiCode >= 65 && asciiCode <= 90) {
            newStr.push(str[i].toLowerCase());
        }
    }

    let length = newStr.length;

    for (let i = 0; i < length / 2; i++) {
        let a = newStr[i];
        let b = newStr[length - i - 1];
        if (newStr[i] != newStr[length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
