"use strict";
// Diferença entre type e interface
// Geralmente utilizamos o tipo quando queremos tipar um objeto específico e
// interface quando desejamos trabalhar com modelos de classe, onde quando herdamos aquela interface,
// temos que cumprir corretamente com aqueles campos
const bot1 = {
    id: "1",
    name: "megaman",
};
const bot2 = {
    id: "1",
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    },
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
// Resumindo, é ideal trabalhar com type para tipar uma variável ou objeto
// e trabalhar com interface para quando quiser criar uma classe, um contrato por exemplo
