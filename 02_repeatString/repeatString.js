const repeatString = function(string, num) {

    if(num < 0) return "ERROR";
    
    let final = "";
    for(let i = 0; i < num; i++){
        final += string;
    }

    return final
};

// console.log(repeatString("bad", 2))

// Do not edit below this line
module.exports = repeatString;
