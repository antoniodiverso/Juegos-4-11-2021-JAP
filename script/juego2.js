let numeroRandom;
let vidas = 10;

document.addEventListener("DOMContentLoaded", function (e) {

    numeroRandom = Math.floor(Math.random() * 100);


});



function checkearNumero() {

    let inputNumero = document.getElementById('inputNumero');
    

    console.log(inputNumero.value)

    if (inputNumero.value != "") {

        
        if (vidas > 0) {
            if (inputNumero.value > numeroRandom) {
                alert('El número random es más chico');
            }
            else if (inputNumero.value < numeroRandom) {
                alert('El número random es más grande');
            } 
            else {
                alert("VAMO LOS PIBES!!");
                window.location = "juego2.html";
            }
            
        } else {
            alert("Te quedaste sin vidas capo");
            window.location = "juego2.html";
        }
        vidas--;
        console.log(vidas);
    }
}
