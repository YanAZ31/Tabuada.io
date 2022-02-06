let topic = document.querySelectorAll(".topic")
let exemples = document.querySelectorAll(".math-exemples")



topic.forEach(function(e,index){
    let arrExemples = Array.from(exemples)
    e.addEventListener("click",function(){
        arrExemples[index].classList.remove("hide")
        arrExemples[index].classList.add("animate__animated","animate__backInDown")
        
    })
})
topic.forEach(function(e,index){
    let arrExemples = Array.from(exemples)
    e.addEventListener("dblclick",function(){
        arrExemples[index].classList.remove("animate__backInDown")
        arrExemples[index].classList.add("animate__backOutUp")
        setTimeout(function(){
            arrExemples[index].classList.add("hide")
            arrExemples[index].classList.remove("animate__backOutUp")
        },500)
      
        
    })
})



//  tab subpages
let itemMenu = document.querySelectorAll(".tab")
let arrItemMenu = Array.from(itemMenu)
let tabs = document.querySelectorAll(".main")
let arrTabs = Array.from(tabs)

itemMenu.forEach(function(e,index){
    e.addEventListener("click",function(){
        
        for(i=0; i<= arrTabs.length; i++){
            arrTabs[i].classList.remove("active","animate__backInRight" )
            arrTabs[index].classList.add("active","animate__backInRight","animate__animated")
        }
    })
})