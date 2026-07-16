const prompt = require('prompt-sync')()

let carros = []

console.log("Cadastre 5 carros:")

for(let i = 0; i < 5; i++) {
    let carro = prompt(`Digite o ${i + 1}º carro: `)
    carros.push(carro)
}

console.log("\nDigite o nome de um carro para colocar no início da lista: ")
let novoCarro = prompt()
carros.unshift(novoCarro)

console.log("\nDigite o nome de um carro para colocar no final da lista: ")
novoCarro = prompt()
carros.push(novoCarro)

console.log("\nLista de carros:")
console.log(carros)