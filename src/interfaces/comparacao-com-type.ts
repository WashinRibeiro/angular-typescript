// Diferença entre type e interface
// Geralmente utilizamos o tipo quando queremos tipar um objeto específico e 
// interface quando desejamos trabalhar com modelos de classe, onde quando herdamos aquela interface,
// temos que cumprir corretamente com aqueles campos

type robot = {
    id: number | string
    name: string
}

interface robot2 {
    id: number | string
    name: string
}

// -------------------

const bot: robot2 = {
    id: 1,
    name: "robot"
}

const bot2: robot2 = {
    id: 1,
    name: "robot"
}

// -------------------