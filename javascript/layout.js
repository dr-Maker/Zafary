var seleccion = document.querySelector('#contDinamic');
var lisHome = document.querySelector('#home');
var lisZpty = document.querySelector('#zpty');
var lisWz = document.querySelector('#wz');


lisZpty.addEventListener("click", zpotify);

function zpotify() {
    seleccion.setAttribute("src", "../zpotify/index.html");
    let text1 = document.querySelector('#namePag');
    text1.innerHTML = "Zpotify";
};



lisWz.addEventListener("click", whazApp);

function whazApp() {
    seleccion.setAttribute("src", "../WhazApp/index.html");
    let text2 = document.querySelector('#namePag');
    text2.innerHTML = "WhazApp";
};


lisHome.addEventListener("click", home);

function home() {
    seleccion.setAttribute("src", "../Home/index.html");
    let text3 = document.querySelector('#namePag');
    text3.innerHTML = "Home";
}