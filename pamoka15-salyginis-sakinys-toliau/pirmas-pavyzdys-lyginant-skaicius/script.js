window.onload = function() {
    let ivedimoLaukelis1;
    let ivedimoLaukelis2;
    let mygtukas;
    let pastraipa;

    ivedimoLaukelis1 = document.getElementById("sk1");
    ivedimoLaukelis2 = document.getElementById("sk2");
    mygtukas = document.getElementById("mygtukas");
    pastraipa = document.getElementById("isvedimoPastraipa");

    mygtukas.onclick = function() {
        let skaicius1;
        let skaicius2;

        skaicius1 = ivedimoLaukelis1.valueAsNumber;
        skaicius2 = ivedimoLaukelis2.valueAsNumber;

        console.log(skaicius1);
        console.log(skaicius2);

        let sandauga;
        sandauga = skaicius1 * skaicius2;

        let suKuoLyginti = 1000;

        if (palygintiDuSkaicius(sandauga, suKuoLyginti) == 1) {
            pastraipa.innerHTML = "Skaičių sandauga yra didesnė už " + suKuoLyginti;
        }
        else if (palygintiDuSkaicius(sandauga, suKuoLyginti) == -1) {
            pastraipa.innerHTML = "Skaičių sandauga yra mažesnė už " + suKuoLyginti;
        }
        else {
            pastraipa.innerHTML = "Skaičių sandauga yra LYGI SU " + suKuoLyginti;
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