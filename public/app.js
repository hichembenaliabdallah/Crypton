const arrow = document.getElementById("speed")
arrow.addEventListener("click",()=>{
    
    window.scrollTo({top : document.body.scrollHeight,
        behavior : "smooth"}
       )
})
