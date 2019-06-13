const Point = require('./Point')
const isInteger = require('../../libs/jegv/math/isInteger')

class Circle {
  constructor (pointA, r) {
    if (pointA instanceof Point && isInteger(r) ) {
      this.pointA = pointA
      this.r = r
    } else {
      throw new Error ('Debes utilizar la clase Point')
    }   
  }
}

module.exports = Circle