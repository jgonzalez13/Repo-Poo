let doubleFe = function (list) {
    let result = []
    
    list.forEach(number => {
        result.push(number*2)
    });

    return result
}

let a = [5,4,3,2,1]

console.log(doubleFe(a)
)