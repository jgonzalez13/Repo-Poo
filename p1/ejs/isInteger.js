function isInteger(x, y) {
    if (Number.isInteger(x) &&  Number.isInteger(y)) {
      return true;
    }
    return false;
  }
  
  console.log(isInteger(5, 10))
