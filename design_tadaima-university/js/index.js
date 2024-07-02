

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
    let cursor = `ellipse(200px 200px at ${mousePosX}px ${mousePosY}px)`;
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




document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);



    // ターゲット要素
    const otherProducts = document.querySelector('.background__left-content');

    // サークルテキストの回転アニメーションを設定
    gsap.to(".background__text-circle-box.left svg", {
        rotation: 360,
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: {
            trigger: otherProducts,
            start: "top bottom",
            end: "+=6000",
            scrub: true,
        }
    });

});

// スクロールスムーズ
const lenis = new Lenis({
    lerp: 0.2, // 慣性の強さ
    duration: 2, // スクロールアニメーションの時間
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
