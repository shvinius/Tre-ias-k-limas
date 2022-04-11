window.onload = function() {
    let vardoTekstoLaukelis;
    let pavardesTekstoLaukelis;
    let ivedimoMygtukas;


    vardoTekstoLaukelis = document.getElementById("vardoIvedimoLaukelis");
    console.log(vardoTekstoLaukelis);

    pavardesTekstoLaukelis = document.getElementById("pavardesIvedimoLaukelis");
    console.log(pavardesTekstoLaukelis);

    ivedimoMygtukas = document.getElementById("ivedimoMygtukas");
    console.log(ivedimoMygtukas);

    ivedimoMygtukas.onclick = function() {
        let vardas;
        let pavarde;

        vardas = vardoTekstoLaukelis.value;
        pavarde = pavardesTekstoLaukelis.value;

        // Išvedu tekstą patikritni ar gerai nuskaitė iš laukelių
        console.log(vardas);
        console.log(pavarde);
    }
}