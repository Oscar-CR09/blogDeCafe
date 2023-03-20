//query selecto
// const heading = document.querySelector('.header__texto h2') //retorna 0 1 elemntos 
// console.log(heading);

//query selecto all

//getelemtbyid

//generar un enlace de js
const nuevoEnlace = document.createElement('A') //en mayuscula
//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto 
nuevoEnlace.textContent = 'Tienda Virtual';
//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//agregar al documnetp
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);