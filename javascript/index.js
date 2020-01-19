let data = {
    idUsuario: "ejemplo@gmail.com",
    idPass: "123456"
};



let dataCadena = JSON.stringify(data);
localStorage.setItem("id-json", dataCadena);



let usLocalStorage = localStorage.getItem("id-json");
let objLocalStorage = JSON.parse(usLocalStorage);
let error = document.querySelector('#error1');
let user = document.querySelector('#iduser');
let pass = document.querySelector('#idpass');

var boton = window.document.querySelector("#btn");

boton.addEventListener('click', login);




function login() {
    if (user.value === "" || pass.value === "") {
        return;
    }

    if (user.value === objLocalStorage.idUsuario && pass.value == objLocalStorage.idPass) {

        error.classList.add('hide');
        document.location.assign('./Layout/index.html');

    } else {


        error.classList.remove('hide');
    }
};

localStorage.removeItem("id-json");