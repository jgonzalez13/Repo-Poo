const Point = require ('../../libs/jegv/geometry/Point')

const Triangule = require('../../libs/jegv/geometry/Triangule')

let p1 = new Point(2,3)
let p2 = new Point(4,5)
let p3 = new Point(7,8)

let TrianguleHeri = new Triangule(p1,p2,p3)

console.log(TrianguleHeri.toString())


