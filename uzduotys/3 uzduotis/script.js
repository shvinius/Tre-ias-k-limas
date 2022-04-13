window.onload = function() {
    let ivedimoLaukelis;
    let mygtukas;
    let pastraipa;

    ivedimoLaukelis = document.getElementById("vienasLaukelis");
    mygtukas = document.getElementById("mygtukas");
    pastraipa = document.getElementById("isvedimoPastraipa");

    mygtukas.onclick = function() {
        let skaicius1;
      
        skaicius1 = ivedimoLaukelis.valueAsNumber;
        console.log(skaicius1);

        if (daugiauMaziau(skaicius1)) {
            pastraipa.innerHTML = "true";
        }
        else {
            pastraipa.innerHTML = "false";
        }

    }
}
function daugiauMaziau (x) {
    let rezultatas;
    if (x > 10 && x < 50) {
       rezultatas = true;
    }
    else {
        rezultatas = false;
    }
    return rezultatas;
}