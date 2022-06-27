// par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao //Retornará o que está dentro da função, caso não haja dentro da função procurará em todo o código, se não houver variável com este nome
                    // retornará undefined.
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Fulvio',
    idade: '20',
    peso: '79',
    endereco: {
        logradouro: 'Rua Lakaka',
        numero: '493'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)