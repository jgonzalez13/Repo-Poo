class Fraction {
  constructor( n, d ) {
    this.n = n 
    this.d = d 
  }
  ecuclides ( n, d ) {
    while (n != d) {
      if (n > d) {
        n = n - d
      } else {
        d = d -n
      }
    }
    return d
  }
  sum ( f ) {
    let n = this.n * f.d + f.n * this.d 
    let d = this.d * f.d
    return new Fraction( n, d )
  }
  subt ( f ) {
    let n = this.n * f.d - f.n * this.d 
    let d = this.d * f.d
    return new Fraction( n, d )
  }
  div ( f ) {
    let n = this.n * f.d
    let d = this.d * f.n
    return new Fraction( n, d )
  }
  mul ( f ) {
    let n = this.n * f.n
    let d = this.d * f.d
    console.log('Euclides')
    console.log(this.ecuclides(n, d))
    return new Fraction( n, d )
  }
}

export { Fraction }