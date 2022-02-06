var gatilho = document.querySelector("#btn")
var modal = document.querySelector(".modal")
var header = document.querySelector(".header")
var close = document.querySelectorAll("#close")
var aviso = document.querySelector(".result")
function previne(e){
    e.preventDefault()
}

function removeClass (e){
    modal.classList.remove(`${e}`)
}
gatilho.addEventListener("click",previne)


gatilho.addEventListener("click", showModal)

function showModal (){
    gatilho.classList.remove("animate__heartBeat")
    modal.classList.add("show-modal","animate__fadeInDown")
    header.classList.add("opacity")

}

function hideModal (){
    removeClass("animate__fadeInDown")
    removeClass("animate__backOutDown")
    modal.classList.add("animate__backOutDown")
    setTimeout(function(){
        
    header.classList.remove("opacity")
   
    removeClass("show-modal") 
    aviso.classList.remove("hide")   
    tabuada.classList.add("hide") 
    modal.classList.remove("animate__backOutDown")
    var arr10 = []
    },1000)

    modal.classList.add("animate__backOutDown")
   

}

close.forEach(function(item){
    item.addEventListener("click",hideModal)
    item.addEventListener("click",previne)

});