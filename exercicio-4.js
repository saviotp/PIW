const vendas = [
    {produto: "Notebook", preco: 2500, quantidade: 2},
    {produto: "Smartphone", preco: 1500, quantidade: 3},
    {produto: "Teclado", preco: 200, quantidade: 5},
]

const totalVendas = vendas.reduce(function(vendas, item) {
    item = item.quantidade * item.preco;
    return vendas += item
}, 0);

//Confesso que quando eu tava fazendo essa parte tava achando estranho... achei que não iria funcionar fragmentar a chave e não deixar tudo em uma linha
//Mas funcionou bem deboas, deixou mais bem explicadinho

console.log(totalVendas);