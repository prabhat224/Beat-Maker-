window.addEventListener("load",()=>{
    const sound=document.querySelectorAll(".sounds")
    const pad=document.querySelectorAll(".pads div")

    const animation=document.querySelector(".animation")

    const color=[
        "#fb4727",
        "#0909c5",
        "#eeee1d",
        "#39d439",
        "#be35be",
        "#2eb7e5"
    ]








    pad.forEach((pad_var,index)=>{
        pad_var.addEventListener("click",function(){
            sound[index].currentTime=0;  //setting the current click time =0 whenever clicked
            sound[index].play();
            createdrop(index);
        });
    });

    
    //Drop function

    const createdrop=(index)=>{

        const drop=document.createElement("div");
        animation.appendChild(drop)
        drop.style.backgroundColor=color[index]
        drop.style.animation="jump 1.5s ease"
        drop.addEventListener('animationend',function(){
            animation.removeChild(this)
        })     //so that the event does not create multiple copies of same element 
    }
    
    
    
    











});