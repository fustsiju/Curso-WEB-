function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] //Se o minimo for maior que o máximo inverter as duas variáveis.
    const valor = Math.random () * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40])) //Setando min = 40 e max = 50, uma vez que se o min for maior que o max deve ser invertida a ordem
console.log(rand([450])) //Setando o min = 450, uma vez que ele vem primeiro na função rand
console.log(rand([, 100])) //Setando o max = 100, uma vez que estamos ignorando o min utilizando ','
console.log(rand([])) //Retornando os valores padrões da função rand