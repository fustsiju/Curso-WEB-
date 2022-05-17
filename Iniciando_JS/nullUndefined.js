let valor // não definido
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco) //Não está definido o preço de produto
console.log(produto)

produto.preco = 4.00
console.log(produto)

produto.preco = undefined // evite atribuir undefined, usar "0" ou null
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço, diferente de gratis
console.log(!!produto.preco)
console.log(produto)