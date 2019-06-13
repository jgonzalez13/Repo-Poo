var puntox = 1, puntoy = 2, radio = 5;
hipotenusa = Math.sqrt( Math.abs(puntox*puntox) + Math.abs(puntoy*puntoy) );

 if(hipotenusa < radio)
     print('El punto esta dentro del círculo');
 else if(hipotenusa > radio)
     print('El punto esta fuera del círculo');
 else
     print('El punto esta sobre el círculo');
