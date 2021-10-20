const escola = "Cod3r"

console.log(escola.charAt(4))          //Retorna nulo
console.log(escola.charAt(5))          //Retorna nulo
console.log(escola.charCodeAt(3))     //Valor retornado será o número da tabela unicode
console.log(escola.indexOf('3'))      // Valor retornado será o número 3 encontrado dentro da const escola

console.log(escola.substring(1))      // "Saia do índice 1 e me dê o restante da palavra"  
console.log(escola.substring(0, 3))  //Significa "Saia do índice 0 e me dê 3 caracteres", retornando Cod

console.log('Escola'.concat(escola).concat("!"))  
console.log(escola.replace(3, 'e'))   //Substituindo 3 por "e"

console.log('Ana, Maria, Pedro'.split(','))

