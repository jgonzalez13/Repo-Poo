let doubleM = function(list) {
    return list.map(number => number * 2)
}

let a = [5,4,3,2,1]
console.log(doubleM(a))


/// EXAMPLE - 2


[1, 2, 3].map((element, index, arr) => console.log({element, index, arr}))