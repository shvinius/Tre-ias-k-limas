window.onload = function() {
    let ivedimoLaukelis1;
    let ivedimoLaukelis2;
    let mygtukas;
    let pastraipa;

    ivedimoLaukelis1 = document.getElementById("zodis1");
    ivedimoLaukelis2 = document.getElementById("zodis2");
    mygtukas = document.getElementById("mygtukas");
    pastraipa = document.getElementById("isvedimoPastraipa");

    mygtukas.onclick = function() {
        let tekstas1;
        let tekstas2;

        tekstas1 = ivedimoLaukelis1.value;
        tekstas2 = ivedimoLaukelis2.value;

        console.log(tekstas1);
        console.log(tekstas2);

        if (palygintiDuZodzius(tekstas1, tekstas2) == 0) {
            pastraipa.innerHTML = "Tekstai vienodi";
        }
        else {
            pastraipa.innerHTML = "tekstai skirtingi";
        }
    }
}


function palygintiDuZodzius(x, y) {
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