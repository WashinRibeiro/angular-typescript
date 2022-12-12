// GENERICS

// ******* forma incorreta *******
function concatArray(...itens: any[]):any[] {
    return new Array().concat(...itens);
}

const numArray = concatArray([1, 5], [3])
const stgArray = concatArray(["felipe", "goku"], ["vegeta"])

console.log(numArray)
console.log(stgArray)

// Dessa forma temos que o retorno é um array any, mas o ideal não é isso,
// então temos que tipar de forma genérica, pondendo receber qualquer coisa

// ----------------------------------------


// ******* forma correta *******
function concatArray2<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray2 = concatArray2<number[]>([1, 5], [3])
const stgArray2 = concatArray2<string[]>(["felipe", "goku"], ["vegeta"])

console.log(numArray2)
console.log(stgArray2)

// Dessa forma criamos o "T" que é um tipo genérico, onde recebe T e retorna T.
// Com isso, quando chamamos passando number, ele retornará number 
// e quando chamamos passando string ele retornará string