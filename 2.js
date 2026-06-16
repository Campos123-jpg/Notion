const prompt = require('prompt-sync')()

let numeros = []

console.log("Escreva 10 números")

for(let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Digite um número: "))
    numeros.push(num)
}

console.log("Números pares:")

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        console.log(numeros[i])
    }
}