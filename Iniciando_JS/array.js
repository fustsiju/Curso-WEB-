const valores = [7.7, 8.9, 5.3, 7.4]     //Dados dinâmicos
console.log(valores[0], valores[3])
console.log(valores[4])                 //indefinido

valores[4] = 10                        // Dando valor a um array fora do const 
console.log(valores)          
console.log(valores[4])
console.log(valores.length)           // Tamanho do array

valores.push({id: 3}, false, null, 'teste')        //Inclui conteúdos dentro do array
console.log(valores)

console.log(valores.pop())           //Tira o ultimo dado de valores
delete valores[0]                   //Deleta o indice zero de valores
console.log(valores)

console.log(typeof valores)