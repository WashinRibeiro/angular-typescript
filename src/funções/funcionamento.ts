// A diferença das funções em typescript é que os parametros precisam/podem ser tipadas
// Além disso, a variável que receber o retorno dessa função por exemplo, também precisa ser do mesmo tipo da função
// Caso não seja, dará erro de tipagem

function addNumber(x: number, y: number): number {
    return x + y
}

let soma: number = addNumber(4, 7);
console.log(soma);

// ---------------------------------------

function addHello(name: string): string {
    return `Hello ${name}`;
}

console.log(addHello("Washington"));

// ---------------------------------------