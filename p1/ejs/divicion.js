function isNumber (x) {
  if (typeof x === 'number') {
    return true
  } else {
    return false
  }
}

function isZero (arg) {
  if (arg === 0) {
    throw new Error ('Zero div ...')
  } else {
    return arg
  }
}

function divicion (a,b) {
  if (isNumber(a) && isNumber(b) && !isZero(b)) {
    return a / b
  }
}

print (divicion(2, 0))