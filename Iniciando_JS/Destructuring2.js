const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]  //Ignorando n2 e n4 e aplicando valores.
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[, 8,8], [9, 6, 8]] //Ignorar o primeiro array, ir para o segundo e pegar o segundo número '6'.
console.log(nota)