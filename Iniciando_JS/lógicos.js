function compras(trabalho1, trabalho2){
    const comprarSovete = trabalho1 || trabalho2  // || = ou
    const comprarTv50 = trabalho1 && trabalho2 // && = e
    // const comprar Tv32 = !!(trabalho1 ^ trabalho2) // bitwise
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSovete //Operador unário

    return { comprarSovete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))