let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)       //Transformando number em booleano 
console.log(!isAtivo)       //Negação "!", Verdadeiro "!!" assim como na matemática

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))

console.log("os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar...")
console.log(!!('' || null || 0 || ' '))

let nome = 'Fulvio'
console.log(nome || 'Desconhecido')                     //Verificando caso haja nome na variavel let, caso não, imprimir desconhecido.
