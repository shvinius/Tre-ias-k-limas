window.onload = function() {
    // PIRMAS SĄLYGINIO SAKINIO PAVYZDYS
    // Tikriname ar skaičius yra neneigiamas (didesnis arba lygus nuliui)
    // Rezultatą išvedu į konsolę
    let x;
    x = 25;

    if (x >= 0) {
        console.log("X yra arba teigiamas arba nulis");
    }
    else {
        console.log("X yr NEIGIAMAS");
    }
    





    // ANTRO SĄLYGINIO SAKINIO PAVYZDYS
    // Palygina ar skaičius yra neigiamas ar teigiamas ar nulis (trys skirtingi variantai)
    let y;
    y = 0;
    if (y > 0) {
        console.log("y yra teigiamas");
    }
    else if (y < 0) {
        console.log("y yra neigiamas");
    }
    else {
        console.log("y yra nulis");
    }


    // Trečio sąlyginio sakinio pavyzdys naudojant MOD (%) operaciją
    // Patikrinam ar skaičius yra lyginis ar ne ir išvedam
    let skaicius;
    skaicius = 201;

    if (skaicius % 2 == 0) {
        console.log("Skaičius yra lyginis");
    }
    else {
        console.log("Skaičius yra nelyginis");
    }


    // Ketvirto sąlyginio sakinio pavyzdys 
    // Palyginam du skirtingus skaičius, kuris iš jų yra didesnis (arba lygūs)
    let sk1;
    let sk2;
    sk1 = 105;
    sk2 = 10;

    if (sk1 > sk2) {
        console.log("SK1 yra didesnis");
    }
    else if (sk2 > sk1) {
        console.log("SK2 yra didesnis");
    }
    else {
        console.log("abu yra vienodi");
    }
    
}