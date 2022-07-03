const pessoa = {
    nome: 'Ana',
    idade: '19',
    endereco: {
        logradouro: 'Rua Jajaja',
        numero: '928'
    }
}
const {nome, idade} = pessoa //Tirando nome e idade da constante "pessoa", método para retirar vários atributos de um objeto sem imprimir ele todo.
console.log(nome, idade)

const {nome: n, idade: i } = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const{endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
