let trancicion=document.querySelector(".sidebar")
let boton=document.querySelector(".openbtn")
let cerrar=document.querySelector(".closebtn")

boton.addEventListener("click",function(){

    //console.log("se crea la funsion click")
    trancicion.style.left="0px"
    


});
cerrar.addEventListener("click",function(){

   //console.log("se crea la funsion click")
    trancicion.style.left="-200px"
    


})