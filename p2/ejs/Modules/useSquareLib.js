const Point = require ('../../libs/jegv/geometry/Point')

const square = require('../../libs/jegv/geometry/Square')

let punto = new Point(2,3)

let pruebaSquare = new square(punto)

console.log(pruebaSquare.toString())