// Clase Point
const Point = require('../../libs/jegv/geometry/Point.js')

// Clase Line
const Regtangulo = require('../../libs/jegv/geometry/Regtangulo')

let a = new Point(3, 4)
let b = new Point(6, -4)

let pruebaRegtangulo = new Regtangulo( a, b )

console.log(pruebaRegtangulo.toString())