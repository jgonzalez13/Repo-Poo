class Point {
  constructor( x, y ) {
    this.x = x
    this.y = y
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

export { Point }
