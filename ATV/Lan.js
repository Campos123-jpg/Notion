const prompt = require('prompt-sync')()
 
let pedido = []

console.log("Lista de Menu:")
console.log("1 - Xis\n 2 - Cachorro Quente\n 3 - Pizza\n 4 - Refrigerante\n 5 - Suco\n 6 - Pastel\n 7 - Sorvete\n 8 - Açaí\n 9 - Milkshake\n 10 - Coxinha")

console.log("Bem vindo a nossa lanchonete!")
 
for(let i = 1; i <= 5; i++) {
    pedido.push(prompt("Faça o seu pedido: "));
}

console.log("\nLista de pedidos:")
console.log(pedido)

pedido.push(prompt("Digite um último pedido extra: "))

console.log("Lista de pedidos atualizada:")
console.log(pedido)

pedido.pop()
console.log("\nLista após apagar o último pedido:")
console.log(pedido)

pedido.unshift(prompt("Coloque um pedido no início da lista: "))
console.log("Lista de pedidos atualizada:")
console.log(pedido)

console.log("\nO primeiro pedido é: " + pedido[0])
console.log("O último pedido é: " + pedido[pedido.length - 1])

console.log("\nSua lista atualizada de pedidos é: ")
console.log(pedido)
