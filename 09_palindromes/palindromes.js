const palindromes = function (string) {

    string = string.toLowerCase();
    string = string.replace(/\W/g, "");
    
    const revString = string.split("").reverse().join("");
    return string === revString;
};

// Do not edit below this line
module.exports = palindromes;
