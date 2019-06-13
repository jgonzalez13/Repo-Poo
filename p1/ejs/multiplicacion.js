function isNumber (x) {
    if (typeof x === 'number') {
      return true
    } else {
      return false
    }
  }
  
  function Multiplicacion (a,b) {
    if (isNumber(a) && isNumber(b)) {
      return a * b
    }
  }
  
  print (Multiplicacion(2, 2))