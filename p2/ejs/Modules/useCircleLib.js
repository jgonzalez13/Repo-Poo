const Point = require ('../../libs/jegv/geometry/Point')

const Circulo = require('../../libs/jegv/geometry/Circle')

let punto = new Point(2,3)
let radio = 5

let pruebaCirculo = new Circulo(punto, radio)

console.log(pruebaCirculo.toString())