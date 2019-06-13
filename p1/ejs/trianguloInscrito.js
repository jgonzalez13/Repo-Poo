print('CALCULAR ÁRE DE UN TRIANGULO INSCRITO');
var a = 5;
var b = 8;
var c = 12;

var s = 0.5 * (a+b+c);

var r = (a+b+c) /Math.exp(Math.log(s*(s-a)*(s-b)*(s-c)) / 4)

print('El radio es: ' + r); 
