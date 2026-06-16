const prompt = require('prompt-sync')()

let filmes = []

console.log("Cadastre 5 filmes")

for(let i = 0; i < 5; i++) {
    let filme = prompt(`Digite o ${i + 1}º filme: `)
    filmes.push(filme)
}

console.log("\nLista de filmes:")
console.log(filmes)

console.log("\nPrimeiro filme cadastrado: " + filmes[0])
console.log("Último filme cadastrado: " + filmes[filmes.length - 1])
console.log("Quantidade de filmes: " + filmes.length)