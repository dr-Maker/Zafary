
//console.log("hola");
var boton= window.document.querySelector("#btn");
boton.addEventListener('click', function(){
validar();    
});

function validar(){


    const user = document.querySelector('#iduser').value;
    const pass = document.querySelector('#idpass').value;

    if (user === "ejemplo@gmail.com" && pass == "123456") {

        //alert("Iniciando sesión…");
        console.log('Iniciando sesión…');
    } else {

       // alert("Email y/o contraseña incorrectoss");
        console.log('Email y/o contraseña incorrectoss');
    }
};

