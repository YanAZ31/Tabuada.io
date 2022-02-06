var hamburguer = document.querySelector("#menu-mobile")
var menu = document.querySelector(".menu-itens")

function showMenu (){
menu.classList.toggle("show-Menu")
menu.classList.toggle("animate__bounceInDown")




}


hamburguer.addEventListener("click",showMenu)