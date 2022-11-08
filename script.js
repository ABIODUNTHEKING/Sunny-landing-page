let menuButton = document.querySelector(".menu")
let menuContent = document.querySelector(".navbar")
let pageLinks = document.querySelectorAll(".page-links"), i;

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

console.log(pageLinks)
for(i = 0; i < pageLinks.length; ++i){
    pageLinks[i].addEventListener('click', ()=>{
        menuContent.style.display = "none"
        menuButton.setAttribute("aria-hidden", "true")
    })
}



