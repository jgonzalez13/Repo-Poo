const isInteger = require('../math/isInteger')

class Point {
  constructor( x, y ) {
    isInteger(x) ? this.x = x : this.x = 0
    isInteger(y) ? this.y = y : this.y = 0
  } 
  toString () {
    return "(" + this.x + ", " + this.y + ")"
  }
  distance (p) {
    return Math.sqrt(( this.x - p.x ) ** 2 + ( this.y - p.y ) ** 2)
  }
  clone () {
    return new Point ( this.x, this.y )
  }
}

module.exports = Point
