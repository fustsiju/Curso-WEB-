console.log('a=', a)
var a = 2                    //A declaração de variáveis em var não é de cima para baixo, neste exemplo a variável "a", já existe porém está indefinida.
console.log('a=',a)         //Este evento se chama hoisting.

function teste(){
    console.log('a=', a)
    var a = 2
    console.log('a=', a)
}

teste()

//Testando com Let
//console.log('b=', b)                //Erro pois não está declarada, logo o hoisting não funciona com o let da linha 15.
let b = 2                  
console.log('b=',b)        

function teste(){
    //console.log('b=',b)               //Erro pois não está declarada, logo o hoisting não funciona com o let da linha 20.
    let b = 2
    console.log('b=', b)
}
