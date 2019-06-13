const myArray = [22, 9, 60, 12, 4, 56]
const sum = (x, y) => x + y
const avg = myArray.reduce(sum, 0) / myArray.length

const avg2 = arr => {
    const sc = arr.reduce((ac, val) => [ac[0]+val, ac[1]+1], [0,0])
    return sc[0] / sc[1]
}  

console.log(avg2(myArray))