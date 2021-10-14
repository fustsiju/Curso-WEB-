//Trocar os valores da variável A para B em vice-versa

let a = 7
let b = 94
let troca = 0

console.log(a)
console.log(b)

troca = a     //Armazenando o valor em uma terceira variável
a = b         // Trocando valor de A para o de B
b = troca     // Trocando valor de B para o da terceira variável

console.log("_____________________________")
console.log(a)
console.log(b)

//Também é possível fazer da seguinte maneira
// [a, b] = [b, a]