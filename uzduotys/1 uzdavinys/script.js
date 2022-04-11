window.onload = function() {
    let pirmasLaukelis;
    let antrasLaukelis;
    let rezultatoMygtukas;
    let gautasRezultatas;

    pirmasLaukelis = document.getElementById("pirmas");
    console.log (pirmasLaukelis);
    antrasLaukelis = document.getElementById("antras");
    console.log (antrasLaukelis);
    rezultatoMygtukas = document.getElementById("rezultatoMygtukas");
    console.log (rezultatoMygtukas);
    gautasRezultatas = document.getElementById("gautasRezultatas");
    console.log (gautasRezultatas);

    rezultatoMygtukas.onclick = function() {
        console.log ("ar veikia?");
        let sk1;
        let sk2;
        
        sk1 = pirmasLaukelis.valueAsNumber;
        sk2 = antrasLaukelis.valueAsNumber;
        console.log(sk1);
        console.log(sk2);
        console.log(arSumaDidesne (sk1, sk2));
        if (arSumaDidesne (sk1, sk2)) {
           gautasRezultatas.innerHTML = "Skaičiai " + sk1 + " ir " + sk2 + " yra didesni" ;
        }
        else {
           gautasRezultatas.innerHTML = "Skaičiai " + sk1 + " ir " + sk2 + " yra mažesni" ;
        }
    }
}    
function arSumaDidesne (x, y) {
    let arDidesnis;
    let suma;
    suma = x + y;

   if (suma > 100) {
       arDidesnis = true;
   }
   else {
       arDidesnis = false;
   }
   return arDidesnis;

}