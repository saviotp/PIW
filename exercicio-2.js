const produtos = [
    {nome: "Camiseta", preco: 50},
    {nome: "Calça", preco: 100},
    {nome: "Tênis", preco: 200}
];

const teste = produtos.map(item => item.precoComDesconto = (item.preco - (0.10 * item.preco)))
//Quebrei um pouquinho a cabeça porque esqueci como calculava porcentagem kk e como adicionava um atributo no array (pesquisei e vi que só o .(novo atributo) já resolvia)

console.log(produtos)