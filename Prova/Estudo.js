const prompt = require('prompt-sync')()

let carros = []

console.log("Cadastre 5 carros:")

for(let i = 0; i < 5; i++) {
    let carro = prompt(`Digite o ${i + 1}º carro: `)
    carros.push(carro)
}
console.log("\nDigite o nome de um carro para colocar no inicio da lista: ")
let novoCarro = prompt()

console.log("\nDigite o nome de um carro para colocar no final da lista: ")
let = prompt()
carros.push(novoCarro)

console.log("\nLista de carros:")
console.log(carros)

console.log("\nPrimeiro carro cadastrado: " + carros[0])
console.log("Último carro cadastrado: " + carros[carros.length - 1])
console.log("Quantidade de carros: " + carros.length)