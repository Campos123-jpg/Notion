const prompt = require('prompt-sync')()

let produtos = []

console.log("Cadastre 5 produtos:")

for(let i = 0; i < 5; i++) {
    let produto = prompt(`Digite o ${i + 1}º produto: `)
    produtos.push(produto)
}
console.log("\nLista de produtos: ")
for(let i = 0; i < produtos.length; i++) {
    console.log(produtos[i])
}
produtos.pop()

console.log("\nLista após apagar o último produto:")
console.log(produtos)