const Point = require('./Point')

class Rectangule {
  constructor (pointA, pointB) {
    if (pointA instanceof Point && pointB instanceof Point) {
      this.pointA = pointA
      this.pointB = pointB
    } else {
      throw new Error ('Debes utilizar la clase Point')
    }   
  }
}

module.exports = Rectangule