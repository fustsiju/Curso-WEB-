const nome = 'Fulvio'
const concatenacao = 'Olá ' + nome + "!"    
const template =`                            
    Olá
    ${nome}!`
 
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()    //Transformando texto em caixa alta
console.log(`Ei... ${up('cuidado')}!`)     //Puxando variável com a string e imprimindo em caixa alta