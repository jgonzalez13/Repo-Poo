function init(){
    for (n=3;n<10;n++){
     s=Math.sqrt(n);
     noFactorSoFar = true;
      for (f=2;f<=s;f++){
       r = n % f;
       if (r==0){
          noFactorSoFar = false;
          break;
       }
      }
      if (noFactorSoFar){
        console.log(n)
        console.log("\n");
      }
    }
  }
  
  init();
  