const prompt = require('prompt-sync')()

let nomes = []

console.log("Cadastre 5 nomes")

for(let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o ${i + 1}º nome: `)
    nomes.push(nome)
}
console.log("\nLista de nomes: ")
for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}
console.log("Escreva outro nome")
let outroNome = prompt("Digite um nome: ")
nomes.push(outroNome)
console.log("\nLista de nomes atualizada: ")
for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}