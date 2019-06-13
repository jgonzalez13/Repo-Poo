let prueba = [30, -40, -20, -10, 40, 0, 10, 5]
  
const sum = (prueba) => {
    let global = [prueba, prueba, prueba]

    global.forEach(element => {
        console.log(element)
    })
}

sum(prueba)