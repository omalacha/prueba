let contrasena=document.querySelector("#psw");
let mensajes=document.querySelector("#message");
let minuscula=document.querySelector("#letter");
let mayuscula=document.querySelector("#capital");
let numeros=document.querySelector("#number");
let minimo=document.querySelector("#length");


contrasena.addEventListener("focus", function () {
    console.log("estoy escribiendo....");
    mensajes.style.display="block";
});

contrasena.addEventListener("blur", function () {
   // console.log("ya no ");
    mensajes.style.display="none";
});

contrasena.addEventListener("keyup", function(e){
   // console.log(contrasena.value); 
    let minus=/[a-z]/g;
    let mayus=/[A-Z]/g;
    let num=/[0-9]/g;



    if(contrasena.value.match(minus)){
        minuscula.classList.remove("invalid");
        minuscula.classList.add("valid");
    }else{
        minuscula.classList.add("invalid");
        minuscula.classList.remove("valid");
        
    }

    if(contrasena.value.match(mayus)){
        mayuscula.classList.remove("invalid");
        mayuscula.classList.add("valid");
    }else{
        mayuscula.classList.add("invalid");
        mayuscula.classList.remove("valid");
        
    }
    if(contrasena.value.match(num)){
        numeros.classList.remove("invalid");
        numeros.classList.add("valid");
    }else{
        numeros.classList.add("invalid");
        numeros.classList.remove("valid");
        
    }
    if(contrasena.value.length >=8){
        minimo.classList.remove("invalid");
        minimo.classList.add("valid");
    }else{
        minimo.classList.add("invalid");
        minimo.classList.remove("valid");
        
    }
});


