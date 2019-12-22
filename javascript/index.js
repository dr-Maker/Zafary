"use strict";

function validar(){

let user = document.querySelector('#iduser').value;
let pass = document.querySelector('#idpass').value;

if(user==="ejemplo@gmail.com" && pass=="123456"){

    console.log("Iniciando sesión…");
}
else {

    console.log("Email y/o contraseña incorrectoss");
}
}

