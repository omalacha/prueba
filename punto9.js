document.addEventListener("scroll", function (){
    let cambiocolor=document.getElementById("cambiocolor");
    let posicion = window.scrollY; 

    if (posicion>0) {
        cambiocolor.style.backgroundColor= "blue";
        cambiocolor.style.color="black";
    }
    else {
        cambiocolor.style.backgroundColor= "orange";
        cambiocolor.style.color="green";
    }
  
});