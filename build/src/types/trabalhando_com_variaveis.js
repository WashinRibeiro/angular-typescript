"use strict";
/* #################
#### Variáveis #####
#################### */
// Tipos Primitivos: boolean, number, string
let ligado = false;
let nome = "Washington";
let idade = 21; // Aqui não temos especificação de inteiro (int) e números decimais (float), todo número é Number
// Tipos especiais: null, undefined
let nulo = null; // ELe só aceita null
let indefinido = undefined; // ELe só aceita undefined
// Tipos abrangentes: void, any
// O void não retorna nada, geralmente é utilizada em funções que não queremos um retorno
let retorno;
function executarTeste() { }
// O any funciona para qualquer tipo de variável das citadas acima, geralmente para receber um retorno que não sabemos o que exatamente será retornado, mas não podemos utilizar o any sempre, se não o Typescript perde o sentido
let numero = 1;
let texto = "Teste";
