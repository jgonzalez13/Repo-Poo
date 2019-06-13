var p = [3]
var suma = 0
var x1 = 0
var x2 = 0

function raizCuadratica (a, b, c) {
  raiz = Math.sqrt(b*b-(4*a*b))

  positivo = ((b*-1)+(raiz))/(2*a);
  negativo = ((b*-1)-(raiz))/(2*a);

  print('x1 = ' + positivo)
  print('x2 = ' + negativo)
}
for (var i = 0; i < 3; i++) {
  print('Ingrese el numero ' + Number(i + 1))
  p[i] = Number(readline())
  suma += p[i]
}
for (var i = 0; i < 3; i++ ) {
 if (p[i] === 1) {
   print ("El numero " + Number(i + 1) + " es neutro multiplicativo")
 } 
}
for (var i = 0; i < 3; i++ ) {
  if (p[i] > 0) {
    print ("Cuadrado (solo si es positivo): " + p[i] * p[i])
  } 
}

print ("Suma: " + suma)

raizCuadratica(p[0], p[1], p[2])
