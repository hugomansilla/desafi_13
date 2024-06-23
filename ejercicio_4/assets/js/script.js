// Ejercicio 4.2
const ele1 = document.getElementById("d1");
const ele2 = document.getElementById("d2");
const ele3 = document.getElementById("d3");
const ele4 = document.getElementById("d4");

function pintar(){
    this.style.backgroundColor = "black";
}

ele1.addEventListener("click", pintar);
ele2.addEventListener("click", pintar);
ele3.addEventListener("click", pintar);
ele4.addEventListener("click", pintar);

// Alternativa más eficiente 



// Guardar teclas 
const ele5 = document.getElementById("key");

function CambiarColor(color) {
    ele5.style.backgroundColor = color;
}

function NuevoDiv(color) {
    contenedor = document.getElementById("contenedor");
    nuevoElemento = document.createElement("div");
    nuevoElemento.textContent = "Sabado";
    nuevoElemento.style.backgroundColor = color;
    contenedor.appendChild(nuevoElemento);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        CambiarColor("pink");
    } else if (event.key === 's') {
        CambiarColor("orange");
    } else if (event.key === "d") {
        CambiarColor("blue");
    } else if (event.key === "q") {
        NuevoDiv("red");
    } else if (event.key === "w") {
        NuevoDiv("gray");
    } else if (event.key === "e") {
        NuevoDiv("black");
    } 

})
    