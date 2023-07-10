let boton=document.querySelector(".dropbtn")
let abrir=document.querySelector("#myDropdown")


boton.addEventListener("click",function(){

    console.log("click")
    abrir.classList.toggle("show");
    

});