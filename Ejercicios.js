let divHover = document.getElementById("pasarPorEncima")
let divEfecto = document.getElementById("efecto")

let cantidadIntroducida = document.getElementById("cantidad")
let precioIntroducido = document.getElementById("precio")
let precioTotal = document.getElementById("total")
let botonCalcular = document.getElementById("enviar")

let cuadro = document.getElementById("cuadro")

let mostrarCoordenadaX = document.getElementById("cX")
let mostrarCoordenadaY = document.getElementById("cY")

let colorAdquirido
let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")

window.onload = function (){
    cuadro.addEventListener('mouseover',function(){
        cuadro.style.backgroundColor = "red"
    })
    cuadro.addEventListener('mouseout',function() {
        cuadro.style.backgroundColor = ""
    })
}

function ejercicio1(){
    alert("Pulsaste sobre el botón")
}

function coordenadas(coordenada){
    mostrarCoordenadaX.value = coordenada.clientX
    mostrarCoordenadaY.value = coordenada.clientY
}

function pulsar(elemento){
    alert(elemento.getAttribute("id"))
}

divHover.addEventListener('mouseover',function () {
    divEfecto.style.backgroundColor = "green"

    divHover.addEventListener('mouseout',function () {
        divEfecto.style.backgroundColor = ""
    })
})

botonCalcular.addEventListener('click',function (){
    precioTotal.value = cantidadIntroducida.value*precioIntroducido.value
})

c1.addEventListener('mouseover',function(){
    colorAdquirido = c1.getAttribute('style')
    c2.setAttribute('style',colorAdquirido)
})

c2.addEventListener('mouseout',function(){
    c2.setAttribute('style','background : white')
})

c3.addEventListener('mouseover',function(){
    colorAdquirido = c3.getAttribute('style')
    c2.setAttribute('style',colorAdquirido)
})