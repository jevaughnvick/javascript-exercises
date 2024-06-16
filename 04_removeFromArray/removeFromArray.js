const removeFromArray = function(array, ...targets) {

    let newArray = [];

    nextElem:
    for(let elem of array){

        for(let target of targets){

            if(elem !== target) continue;
            continue nextElem;
        }

        newArray.push(elem);
    }

    return newArray;
};



// Do not edit below this line
module.exports = removeFromArray;
