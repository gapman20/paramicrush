let encabezados = "";

window.onclick = function(){
    /* Crea una serie de elements por cada tag encontrado */
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("¿Quieres ser mi morrita?");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);

}

/* Tipos de datos en JavaScript */

let variable = 42 /* Numero entero o int */
console.log(typeof variable);
variable ="cuarenta y dos";
console.log(typeof variable);
variable = 42;
console.log(variable + variable);
variable = !-2; /* Tipo de varaible booleano */
console.log(variable);
console.log(typeof variable);