const livros = [
    {titulo: "Javascript para Iniciantes", autor: "João Silva", disponivel: true},
    {titulo: "CSS Avançado", autor: "Maria Oliveira", disponível: false},
    {titulo: "React Rápido", autor: "Ana Souza", disponivel: true},
];

const disponiveis = livros.filter(item => item.disponivel)
//Omiti a comparação com o true pra ficar mais limpino

console.log(disponiveis)
