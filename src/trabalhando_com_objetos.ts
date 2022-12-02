// object - Sem previsibilidade
let product: object = {
    name: "washington",
    cidade: "rj",
    idade: 21
};


// Objeto tipado - Com previsivilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 2
}