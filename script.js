
document.addEventListener("mousemove",function(event){
    gsap.to(".card",{
        x:event.clientX,
        y:event.clientY,
        duration:0.3,
        stagger:-0.1,
        transform:"translate(-50%,-50%)",
    })
})