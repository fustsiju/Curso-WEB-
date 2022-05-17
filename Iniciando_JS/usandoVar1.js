//Exemplo var global
{ { { { { var sera = 'Será???' } } } } }
console.log(sera) 

//Exemplo var escopo de função, ou seja, não funciona fora da função
function teste(){
    var local = 123
    console.log(local)
}
teste()

//Var ou é global ou é escopo de função