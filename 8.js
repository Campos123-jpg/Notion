const prompt = require('prompt-sync')()

let filmes = []

console.log("Cadastre 5 filmes")

for (let i = 0; i < 5; i++) {
    let filme = prompt(`Digite o ${i + 1}º filme: `)
    filmes.push(filme)
}

let posicao = prompt("Qual posição você deseja alterar? ")
let novoFilme = prompt("Digite o novo filme: ")
filmes[posicao - 1] = novoFilme

console.log("\nLista após a alteração:")
console.log(filmes)