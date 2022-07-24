
/* SOLUÇÃO 1*/

function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const array = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(array));

/* SOLUÇÃO 2*/

function filtraImpares(arr) {
    return arr.filter(function(item) {
        return item % 2 !==0;
    })
}

console.log(filtraImpares(array));