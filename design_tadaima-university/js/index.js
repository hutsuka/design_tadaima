


const swiper = new Swiper(".swiper",{
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 1,
    scrollbar:{
        el: ".swiper-scrollbar",
        hide:false,
        draggable: true


    }

});　

const area=window;
area.addEventListener("mousemove",function(e){
    cursorStalker(e);
});
function cursorStalker(e){
    const mousePosX=e.clientX;
    const mousePosY=e.clientY;
    const img =document.querySelector(".background_image");
    let cursor = `ellipse(150px 150px at ${mousePosX}px ${mousePosY}px)`;
    img.style.clipPath=cursor;
}
