// Sempre que utilizamos uma função async (solicitando que ela aguarde alguma coisa)
// devemos retornar uma Promise do tipo do retorno, como no exemplo abaixo
// podemos da mesma forma informar mais de um tipo como Promise<number | string>
// podemos passar o mouse para ser possível a visualização de qual tipo está sendo retornado

async function getDatabase(id: number): Promise<string> {
    return "felipe"
}