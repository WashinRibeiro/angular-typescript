"use strict";
// O TS ajuda a gente a tipar os objetos e as funções
// Nesse exemplo, sabemos que o retorno da função é uma string e que o objeto que é passado é do tipo Hero
// A diferença do TS e JS é que o JS retorna o erro somente na execução, enquanto o TS retorna o erro no próprio desenvolvimento
function ligarPara(heroi) {
    console.log('ligando para: ' + heroi.telefone);
}
ligarPara({
    name: "Toni Stark",
    vulgo: "Homem de Ferro",
    telefone: "2194589872",
});
