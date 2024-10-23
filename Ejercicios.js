













//Ejercicio 1
function ejercicio1(){
    alert("Pulsaste sobre el botón")
}

//Ejercicio 2
let divHover = document.getElementById("pasarPorEncima")
let divEfecto = document.getElementById("efecto")

divHover.addEventListener('mouseover',function () {
    divEfecto.style.backgroundColor = "green"

    divHover.addEventListener('mouseout',function () {
        divEfecto.style.backgroundColor = ""
    })
})
//Ejercicio 3
let cantidadIntroducida = document.getElementById("cantidad")
let precioIntroducido = document.getElementById("precio")
let precioTotal = document.getElementById("total")
let botonCalcular = document.getElementById("enviar")

botonCalcular.addEventListener('click',function (){
    precioTotal.value = cantidadIntroducida.value*precioIntroducido.value
})

//Ejercicio 4
let cuadro = document.getElementById("cuadro")

window.onload = function (){
    cuadro.addEventListener('mouseover',function(){
        cuadro.style.backgroundColor = "red"
    })
    cuadro.addEventListener('mouseout',function() {
        cuadro.style.backgroundColor = ""
    })
}

//Ejercicio 5
function pulsar(elemento){
    alert(elemento.getAttribute("id"))
}

//Ejercicio 6
let mostrarCoordenadaX = document.getElementById("cX")
let mostrarCoordenadaY = document.getElementById("cY")

function coordenadas(coordenada){
    mostrarCoordenadaX.value = coordenada.clientX
    mostrarCoordenadaY.value = coordenada.clientY
}

//Ejercicio 7
let colorAdquirido
let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")

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

//Ejercicio 8
let bloque1 = document.getElementById("ficha1")
let bloque2 = document.getElementById("ficha2")
let bloque3 = document.getElementById("ficha3")

function mostrarBloques(tecla){
    if (tecla.code == "Digit1"){
        bloque1.style.display = "block";
        bloque2.style.display = "none";
        bloque3.style.display = "none";
    }
    if (tecla.code == "Digit2"){
        bloque1.style.display = "none";
        bloque2.style.display = "block";
        bloque3.style.display = "none";
    }
    if (tecla.code == "Digit3"){
        bloque1.style.display = "none";
        bloque2.style.display = "none";
        bloque3.style.display = "block";
    }
}

//Ejercicio 9
let boton = document.getElementById("boton")

window.addEventListener('scroll',function(event){
    if (divHover.getBoundingClientRect().y > window.innerHeight*25/100) {
        boton.style.display = "none"
    } else {
        boton.style.display = "block"
    }
})

//Ejercicio 10
let letras = document.getElementById("letras")

letras.addEventListener('input',function () {
    let prueba = new RegExp('^[a-zA-Z ]+$')
    if (!prueba.test(letras.value)) {
        alert("NO SE PUEDEN INTRODUCIR NÚMEROS")
        letras.value = letras.value.slice(0,-1)
    }
})