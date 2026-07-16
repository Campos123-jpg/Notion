const prompt = require('prompt-sync')()

let produtos = []

console.log("Cadastre 5 produtos:")

for(let i = 0; i < 5; i++) {
    let produto = prompt(`Digite o ${i + 1}º produto: `)
    produtos.push(produto)
}
produtos.shift()

console.log("\nLista após apagar o primeiro produto:")
console.log(produtos)