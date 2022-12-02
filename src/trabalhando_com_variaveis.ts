/* #################
#### Variáveis #####
#################### */

// Tipos Primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Washington"
let idade: number = 21 // Aqui não temos especificação de inteiro (int) e números decimais (float), todo número é Number


// Tipos especiais: null, undefined
let nulo: null = null // ELe só aceita null
let indefinido: undefined = undefined // ELe só aceita undefined

// Tipos abrangentes: void, any
// O void não retorna nada, geralmente é utilizada em funções que não queremos um retorno
let retorno: void
function executarTeste(): void {}

// O any funciona para qualquer tipo de variável das citadas acima, geralmente para receber um retorno que não sabemos o que exatamente será retornado, mas não podemos utilizar o any sempre, se não o Typescript perde o sentido
let numero: any = 1
let texto: any = "Teste"
