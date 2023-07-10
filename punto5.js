let chek=document.querySelector("#myCheck");
let confirmacion=document.querySelector("#text")

function myFunction(){
if(chek.checked){
    confirmacion.style.display="block"

}else{
    confirmacion.style.display="none"
};
}