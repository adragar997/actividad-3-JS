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

let bloque1 = document.getElementById("ficha1")
let bloque2 = document.getElementById("ficha2")
let bloque3 = document.getElementById("ficha3")

let boton = document.getElementById("boton")

let letras = document.getElementById("letras")

window.addEventListener('scroll',function(event){
    console.log(divHover.getBoundingClientRect().y)
    if (divHover.getBoundingClientRect().y > window.innerHeight*25/100) {
        boton.style.display = "none"
    } else {
        boton.style.display = "block"
    }
})

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
})

c2.addEventListener('mouseout',function(){
    c2.setAttribute('style','background : white')
    colorAdquirido = ""
    c2.addEventListener('mouseover',function(){
        c2.setAttribute('style',colorAdquirido)
    })
})

c3.addEventListener('mouseover',function(){
    colorAdquirido = c3.getAttribute('style')
})

function mostrarBloques(tecla){
    if (tecla.code == "Digit1"){
        bloque1.style.display = "block"
    }
    if (tecla.code == "Digit2"){
        bloque2.style.display = "block"
    }
    if (tecla.code == "Digit3"){
        bloque3.style.display = "block"
    }
}

function comprobacion(evento){
    if (evento.code.startsWith("D")) {
        return false
    } else {
        return true
    }
}