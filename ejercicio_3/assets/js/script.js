// Ejercicio 3.2.
//const ele = document.getElementById("ele1")
//ele.addEventListener("click",function(){
//    this.style.backgroundColor = 'yellow'
//})

// Ejercicio 3.3.
function pintar(color = 'green'){
    ele.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar('yellow');
});