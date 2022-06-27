function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max:50, min: 40}
console.log(rand(obj)) // Imprimindo aleatório entre 40 e 50.
console.log(rand({ min: 955 })) // Setando min na função rand como 955 e imprimindo entre 955 e 1000
console.log(rand({})) // Imprimindo valor aleatório entre 0 e 1000