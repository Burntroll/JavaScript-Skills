/* ATIVIDADE 1 */

function somaNumeros(array) {
    return array.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0)
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(somaNumeros(array));

/* ATIVIDADE 2 */

const lista = [
    {
        name: "washing powder",
        price: 30
    },
    {
        name: "cereal",
        price: 12
    },
    {
        name: "towel",
        price: 30
    }
];

let saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("rodada", index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.price
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));
