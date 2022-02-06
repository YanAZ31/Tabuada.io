var numeros = document.querySelectorAll("#numero")
// Convertendo "Numeros em Array"
var arr = Array.from(numeros)
var nome = document.getElementById("inputName")
var numero = document.getElementById("inputNumber")
var tabuada = document.querySelector(".complete")
var maisResultados = document.querySelector(".maisResultados")
// 
var arr10 = []

// Ao submeter
form.addEventListener("submit", function (e){
    tabuada.classList.remove("hide","animate__tada")
    // Evitando o reload da página
    e.preventDefault()
    
    var nomeValue = nome.value
    var numberValue = Number(numero.value)
    arr10 = []
    // Inserindo nome do usuário no HTML

        aviso.classList.add("hide")   
       
       
        if(nomeValue == ""){
            document.querySelector("#nome").innerHTML = "Anônimo"
        }
        else{
            document.querySelector("#nome").innerHTML = nomeValue
        }
        
            for(i=0;i <= 10;i++){
                
                arr[0].innerHTML = numberValue
                var resultado = numberValue * i
                arr[i].innerText = `${i} X ${numberValue} = ${resultado}`
                arr10.push(i + 10)
             
}

setTimeout(function(){
    tabuada.classList.add("animate__tada")
},100)



})

maisResultados.addEventListener("click",function(){
    var nomeValue = nome.value
    var numberValue = Number(numero.value)
    var anima = document.querySelector(".tabuada")
    var novoArray = []


   for(i = 0; i<=10; i++){
    anima.classList.remove('animate__rubberBand')
    arr[0].innerHTML = numberValue
    var resultado = numberValue * arr10[i]
    
    arr[i].innerText = `${arr10[i]} X ${numberValue} = ${resultado}`
    novoArray.push(arr10[i] + 10)
   
   
    
}
setTimeout(function(){
    anima.classList.add("animate__rubberBand")
},100)
arr10 = novoArray


}

)


