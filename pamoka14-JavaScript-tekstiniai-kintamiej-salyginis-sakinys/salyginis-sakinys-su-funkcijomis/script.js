window.onload = function() {
    // Pirmas pavyzdys NAUDOJANT BOOLEAN TIPO KINTAMĄJĮ
    // Boolean tipo kintamieji JavaScript'e susikuria taip pat kaip ir kiti su "let", bet jie gali būti tik "true" arba "false" reikšmės
    let arTeigiamas;
    let x;
    x = -20;

    if (x > 0) {
        arTeigiamas = true;
    }
    else {
        arTeigiamas = false;
    }

    console.log(arTeigiamas);




    // Antras pavyzdys naudojant papildomą funkciją, kuri grąžina boolean kintamąjį (true/false)
    // Tada tikriname ar ta funkcija grąžina true/false ir atitinkamai išvedam rezultatą į konsolę
    let skaicius;
    skaicius = -50;

    console.log( patikrintiArTeigiamas(skaicius) );

    if (patikrintiArTeigiamas(skaicius)) {
        console.log("Skaičius " + skaicius + " yra teigiamas");
    }
    else {
        console.log("Skaičius " + skaicius + " yra neigiamas");
    }

}


function patikrintiArTeigiamas(x) {
    let rezultatas;
    if (x > 0) {
        rezultatas = true;
    }
    else {
        rezultatas = false;
    }
    return rezultatas;
}
