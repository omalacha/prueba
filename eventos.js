let p = document.querySelector("p");
function cambiarColor() {
    this.style.background="red";

}
function quitarColor() {
    this.style.backgroundColor = "white";
}

p.addEventListener("click",cambiarColor);
p.addEventListener("dblclick",quitarColor);
p.addEventListener("mouseover",function(){
    console.log("paso el raton")
});
p.removeEventListener("dblclick",quitarColor)