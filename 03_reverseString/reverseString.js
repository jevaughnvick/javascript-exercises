const reverseString = function(string) {

    let array = string.split("");
    let reversedArray = [];
    let arrayLength = array.length;
    // console.log(array)
    for(let i = 0; i < arrayLength; i++){

        let letter = array.pop();
        reversedArray.push(letter);
    }

    return(reversedArray.join(""))
};

// reverseString("hey")

// Do not edit below this line
module.exports = reverseString;


// convert string to array