const fibonacci = function(member) {

    if(member == 0) return 0;
    if(member < 0) return "OOPS";
    const fibMembers = [1, 1];

    for(let i = 1; fibMembers.length <= (member - 1); i++){

        let precede = i - 1;
        fibMembers.push(fibMembers[i] + fibMembers[precede]);
    }
    return fibMembers[fibMembers.length - 1];
};


// Do not edit below this line
module.exports = fibonacci;
