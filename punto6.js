let sabor=document.querySelector(".nieve");
let rsult=document.querySelector(".resultado");

sabor.addEventListener("change",function(){
    let a_b = sabor.value;
    rsult.textContent = "Te gusta el sabor "+a_b;
});