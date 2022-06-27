let funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()  //Diferente do "var" o let consegue imprimir o número atual da função i.
funcs[8]()