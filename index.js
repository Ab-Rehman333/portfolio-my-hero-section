// for text animation
let textAnimation = $(".dynamic_text").children().length;
let lineAnime = $(".text_anim_container").css("--line-anim-dur");
lineAnime = lineAnime.slice(0, -1);

let total_anim_dur = textAnimation * lineAnime + "s";

$(".text_anim_container").css("--total-dynamic-text", textAnimation);
$(".text_anim_container").css("--total-anim-dur", total_anim_dur);

AOS.init();

const getHamburger = document.querySelector(".ham");
const getCross = document.querySelector(".cross");
getHamburger.addEventListener("click", ()=>{
    getHamburger.classList.remove("navbar-toggler-icon");
    getCross.classList.remove("cross")
    
})
getCross.addEventListener("click", ()=>{
    getCross.classList.add("cross");
    getHamburger.classList.add("navbar-toggler-icon")
})
