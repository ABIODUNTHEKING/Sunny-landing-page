let menuButton = document.querySelector(".menu")
let menuContent = document.querySelector(".navbar")
let hiddenContent = menuButton.getAttribute("aria-hidden")

menuButton.addEventListener('click', ()=>{
    if(menuContent.style.display === "none"){
        menuContent.style.display = "block"
        menuButton.setAttribute("aria-hidden", "false")
    }
    else{
        menuContent.style.display = "none"
        menuButton.setAttribute("aria-hidden", "true")
    }
})