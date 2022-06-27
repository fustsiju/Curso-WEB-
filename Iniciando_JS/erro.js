function tratarErroELancar(erro){
    throw new Error('...');
}
function imprimirNomeGritando(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    }
}

const obj = { nome:'Fulvio'}
imprimirNomeGritando(obj)