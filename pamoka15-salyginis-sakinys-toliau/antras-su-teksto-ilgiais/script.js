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

        let teksto1Ilgis;
        let teksto2Ilgis;

        teksto1Ilgis = tekstas1.length;
        teksto2Ilgis = tekstas2.length;

        console.log(teksto1Ilgis);
        console.log(teksto2Ilgis);


        if (palygintiDuSkaicius(teksto1Ilgis, teksto2Ilgis) == 1) {
            pastraipa.innerHTML = "Pirmas tekstas yra ilgesnis";
        }
        else if (palygintiDuSkaicius(teksto1Ilgis, teksto2Ilgis) == -1) {
            pastraipa.innerHTML = "Antras tekstas yra ilgesnis";
        }
        else {
            pastraipa.innerHTML = "Vienodo ilgio";
        }
    }
}



function palygintiDuSkaicius(x, y) {
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