const Point = require('./Point')

class Line {
  constructor ( pointA, pointB ) {

    if (pointA instanceof Point && pointB instanceof Point) {
      this.pointA = pointA
      this.pointB = pointB
    } else {
      throw new Error ('Debes utilizar la clase Point')
    }   
  }
  draw () {
    console.log('draw')
  }
  clone () {

  }
  get pointA () {
    return this.pointA
  }
  set pointA (x) {
    this.pointA = x
  }
  get pointB () {
    return this.pointB
  }
  set pointB (x) {
    this.pointB = x
  }
}

module.exports = Line
