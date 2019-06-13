let prueba = [30, -40, -20, -10, 40, 0, 10, 5]
  
const sum = (prueba) => {
    let global = [prueba, prueba, prueba]

    global[0].map(x => {
        console.log(global[1][2])
        //commparar(x, global[1], global[2].prueba[x + 2] )
    })

}

const commparar = (a, b, c) => a + b + c

//const one = (list, ) => list
console.log(sum(prueba))