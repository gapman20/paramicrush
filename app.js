function moverPosicionRandom(elem){
    elem.style.position = 'absolute';
    elem.style.top = Math.random() * (window.innerHeight - elem.offsetHeight) + 'px'; /* Para que el "no" no se salga de la pantalla  */
    elem.style.left = Math.random() * (window.innerWidth - elem.offsetWidth) + 'px'; /* Para que el "no" no se salga de la pantalla  */
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter',function(e) {moverPosicionRandom(e.target)});

btnSi.addEventListener('click',function(e){
    alert('SABIA QUE DIRIAS QUE SI, CASEMONOS YA Y TENGAMOS HIJOS. TE AMO!!! ❤');

    divModoSexo.style.display = 'block';
    const cancion = new Audio('img\\modo_hot.mp3');
    cancion.play();
});

botones = document.getElementsByTagName("button")
console.log(botones);

window.addEventListener('beforeunload' , (event) => {
    event.preventDefault();
    event.returnValue = "";
});