let botones=document.querySelectorAll(".accordion");
for(let x=0;x<botones.length;x++){
    botones[x].addEventListener("click",function(){
        //alert("di click");
        let panel=document.querySelectorAll(".panel");
        if(panel[x].style.display == "block"){
            panel[x].style.display="none";
        }else{
            panel[x].style.display="block";
        }
        

    })
}