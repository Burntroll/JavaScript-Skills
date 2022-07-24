const apple = {
    value: 2
}

const orange = {
    value: 3
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg)
}

const nums = [1, 2];

console.log("this -> apple", mapComThis(nums, apple));

console.log("this -> orange", mapComThis(nums, orange));

/* SOLUÇÃO SEM USAR THIS */

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    })
    
}

const array = [2, 4, 6, 8];

console.log(mapSemThis(array));