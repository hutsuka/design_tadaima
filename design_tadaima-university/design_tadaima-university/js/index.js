

// swiper


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

// clipPath

const area=window;
area.addEventListener("mousemove",function(e){
    cursorStalker(e);
});
function cursorStalker(e){
    const mousePosX=e.clientX;
    const mousePosY=e.clientY;
    const img =document.querySelector(".background__image");
    let cursor = `ellipse(150px 150px at ${mousePosX}px ${mousePosY}px)`;
    img.style.clipPath=cursor;
}

// fade-in



const targets = document.getElementsByClassName('fade');
for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer) => {
  for(let go = entries.length; go--;){
   if (entries[go].isIntersecting) {
    entries[go].target.classList.add('active');
    observer.unobserve(entries[go].target);
   }
  }
 });
 observer.observe(targets[i]);
}
