function isMultipleOF (x, y) {
    var resto = x % y;   
    if ( resto === 0 ){
      return true
    } else {
        return false
    }
}

function isDivisibleOf (x, y) {
    var resto = y % x;   
    if ( resto === 0 ){
      return true
    } else {
        return false
    }
}


print(isDivisibleOf(3, 6))
print(isMultipleOF(6, 3))
print(isDivisibleOf(6, 3))
print(isMultipleOF(3, 6))