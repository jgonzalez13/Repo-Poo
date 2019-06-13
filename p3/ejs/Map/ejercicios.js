let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Square
let square = list => list.map(element => element * element)

// Cube
let cube = list => list.map(element => element ** 3 )

// Subt3
let subt3 = list => list.map(element => element - 3)



console.log('square')
console.log(square(list))
console.log('cube')
console.log(cube(list))
console.log('subt3')
console.log(subt3(list))