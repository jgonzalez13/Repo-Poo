// Clase Point
const Point = require('../../libs/jegv/geometry/Point.js')

// Clase Line
const Line = require('../../libs/jegv/geometry/Line.js')

let a = new Point(3, 4)
let b = new Point(6, -4)

let lineEj = new Line( a, b )

console.log(lineEj.toString())