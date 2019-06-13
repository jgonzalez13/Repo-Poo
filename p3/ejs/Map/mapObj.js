let x = [ 3, 3, 4, 2, 1, 3 ]

let alpha = list => list.map(element => element == 3 ? 'a' : element == 2 ? 'b' : element == 1 ? 'c' : 'undefind')

console.log(alpha(x))