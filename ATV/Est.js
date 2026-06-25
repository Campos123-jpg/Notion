const prompt = require('prompt-sync')()

let estoque = ["Arroz", "Feijão", "Macarrão", "Carne", "Frango", "Peixe", "Leite", "Ovos", "Pão", "Queijo"]

console.log("Lista de estoque atual:")
console.log(estoque)    

estoque.push(prompt("Coloque o item no estoque: "));

console.log("Lista de itens atualizada:")
console.log(estoque)

estoque.pop()
console.log("\nLista após apagar o último item:")
console.log(estoque)
/*Colocar e tirar item na lista*/

estoque.unshift(prompt("Coloque um item no início da lista: "))
console.log("Lista de itens atualizada:")
console.log(estoque)

console.log("\nO primeiro item é: " + estoque[0])
console.log("O último item é: " + estoque[estoque.length - 1])

console.log("\nSua lista atualizada de itens é: ")
console.log(estoque)
