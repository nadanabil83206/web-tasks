const menuIcon= document.getElementById("menu-icon");
const links = document.getElementById("links");


menuIcon.addEventListener("click", function(){
    links.classList.toggle("open");
})