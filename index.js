const names = ["Jane", "Jake", "Julia"];
const event = "birthday";
let newArray = [];

function writeCards (names,event) {
    for (let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
    debugger;
}

function countDown (){
    let count = 10;
    while (count >= 0) {
        console.log(count);
        count--
    }
    return count;
}