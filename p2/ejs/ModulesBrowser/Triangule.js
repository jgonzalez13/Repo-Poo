const Point = require('./Point')

class Triangule {
  constructor (pointA, pointB, pointC) {
    if (pointA instanceof Point && pointB instanceof Point) {
      this.pointA = pointA
      this.pointB = pointB
      this.pointC = pointC
    } else {
      throw new Error ('Debes utilizar la clase Point')
    }   
  }
}

module.exports = Triangule