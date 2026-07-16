const prompt = require('prompt-sync')()

let cidades = []

console.log("Cadastre 5 cidades:")

for (let i = 0; i < 5; i++) {
    let cidade = prompt(`Digite a ${i + 1}ª cidade: `)
    cidades.push(cidade)
}

let novaCidade = prompt("Adicione uma cidade ao início da lista: ")
cidades.unshift(novaCidade)

console.log("\nLista após adicionar o primeiro na lista:")
console.log(cidades)