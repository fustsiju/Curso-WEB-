let preco = 19.90
let desconto = 0.4

console.log(19.9 * 0.6)   // Simples
console.log(preco * (1 - desconto))  //Cálculo

let precoComDesconto = (preco * (1 - desconto)) //Variável do cálculo (modo de fazer)

console.log(precoComDesconto) //printando a váriavel acima

///////////////////////////////////////////////////////////////////////////////////////////////////
let nome = "Caderno"           //Exemplo de como funciona a contatenação                        //
let categoria = "Papelaria"                                                                     //
console.log("Produto: " + nome                                                                  //
+ ", Categoria " + categoria                                                                    //
+ ", Preço: "+ preco                                                                            //
+ ", Desconto: " + desconto                                                                     //
+ ", Preço final: " + precoComDesconto)                                                         //
///////////////////////////////////////////////////////////////////////////////////////////////////
