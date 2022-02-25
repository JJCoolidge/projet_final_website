const bouton = document.querySelector(".bouton");
const imgShadows = document.querySelector(".shadows")
bouton.addEventListener("click", function(){
    console.log("click");
imgShadows.classList.add("animation-shadows");
    console.log("click");
})

imgShadows.addEventListener("animationend", function(){
    console.log("end");
    imgShadows.classList.remove("animation-shadows");
    console.log("end");

})