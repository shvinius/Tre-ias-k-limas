window.onload = function() {
    let pirmasIvedimoLaukelis;
    let antrasIvedimoLaukelis;
    let ivedimoMygtukas;
    let pastraipa;

    pirmasIvedimoLaukelis = document.getElementById("pirmasLaukelis");
    console.log (pirmasIvedimoLaukelis);
    antrasIvedimoLaukelis = document.getElementById("antrasLaukelis");
    console.log (antrasIvedimoLaukelis);
    ivedimoMygtukas = document.getElementById("ivedimoMygtukas");
    console.log (ivedimoMygtukas);
    pastraipa = document.getElementById("isvedimoPastraipa");
    console.log (pastraipa);

    ivedimoMygtukas.onclick = function() {
        let text1;
        let text2;

        text1 = pirmasIvedimoLaukelis.value;
        text2 = antrasIvedimoLaukelis.value;
        console.log (text1);
        console.log (text2);

        if (palygintiZodzius(text1, text2) ==0) {
            pastraipa.innerHTML = "Tekstai vienodi";
        }
        else {
            pastraipa.innerHTML = "Tekstai skirtingi";
        }
    }
}
function  palygintiZodzius(x, y) {
    let rezultatas;
    if (x > y) {
        rezultatas = 1;
    }
    else if (x < y) {
        rezultatas = -1;
    }
    else {
        rezultatas = 0;
    }
    return rezultatas;
}