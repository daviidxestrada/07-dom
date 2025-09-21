
const caja1 = document.querySelector("#caja1")
console.log(caja1)

caja1.style.color = "green"

const cajaRojo = document.querySelectorAll(".rojo")
console.log(cajaRojo)


// cajaRojo=[ <div id="caja2" class="rojo">caja 2</div>, <div id="caja4" class="rojo">caja 4</div>]

cajaRojo.forEach((item)=>{
    // console.log(item)
    item.style.color = "red"
})


/* const clase = caja1.getAttribute("class")
console.log(clase)

caja1.setAttribute("data-forma", "redondo")
console.log(caja1)

caja1.setAttribute("data-forma", "cuadrado")
console.log(caja1)

caja1.removeAttribute("id")
console.log(caja1)

const nombre = document.querySelector("#nombre")
console.log(nombre.value)

const cajaContenido = document.querySelector("#cajaContenido")
console.log(cajaContenido) */


const contenidoDeCajaContenido=cajaContenido.innerHTML
/* console.log(contenidoDeCajaContenido)

// cajaContenido.innerHTML="<h1>Nuevo contenido</h1>"

const textDeCajaContenido = cajaContenido.textContent
console.log(textDeCajaContenido)

cajaContenido.textContent = "Nuevo contenido"

console.log(cajaContenido.classList)

cajaContenido.classList.remove("otra", "verde")
console.log(cajaContenido)

cajaContenido.classList.add("grande", "redondo")
console.log(cajaContenido)

cajaContenido.classList.replace("grande","pequenia")
console.log(cajaContenido)

let contieneClase = cajaContenido.classList.contains("redondo")
console.log(contieneClase)

cajaContenido.classList.toggle("redondo")
console.log(cajaContenido) */

const elementoNuevo = document.createElement("section")
elementoNuevo.classList.add("rojo")
elementoNuevo.innerHTML=`<h1>Contenido de elemento nuevo</h1>`
console.log(elementoNuevo)

cajaContenido.before(elementoNuevo)

const articulo = document.querySelector("#articulo1")
const lista = document.querySelector("#lista")

articulo.remove()

console.log(lista.children[0])

lista.removeChild(lista.children[0])
lista.removeChild(lista.children[1])

lista.innerHTML=""