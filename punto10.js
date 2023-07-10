document.addEventListener("scroll", function (){
    let cambiocolor=document.getElementById("cambiocolor");
    let posicion = window.scrollY; 

    //punto 10

    if (posicion >0){
        cambiocolor.style.top="-100px";
        document.getElementById("myBtn").style.display="block";
    }else {
        cambiocolor.style.top="0";
        document.getElementById("myBtn").style.display="none";
    }
})

    document.getElementById("myBtn").addEventListener("click", function(){
        window.scrollTo({
        top:0,
        behavior:"smooth"
        })
    })
