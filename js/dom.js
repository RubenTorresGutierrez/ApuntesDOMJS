/*  dom.js
    Ejercicios Guiados de dom
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/
'use strict'
//DOM: Document Object Model

function ejecutar(){

  //getElementById
  let nombre = document.getElementById('iNombre').value;
  console.log(nombre);

  //getElementsByTagName
  let inputs = document.getElementsByTagName('input');
  let inputstring = '';
  for(let i=0;i<inputs.length;i++)
    inputstring += ' ' + inputs[i].value;
  console.log(inputstring);


  let p = document.querySelector('.c1');
  console.log(p.innerHTML);

  let spans = document.querySelectorAll('.c1 > span');
  console.log(spans);

  //document.getElementsByClassName()


  //Modificación del DOM
  spans[1].innerHTML = ' ¡Viva la Pepa! ';

  //Modificar atributos de estilo
  spans[0].style.color = 'blue';
  spans[0].style.fontSize = '20pt';

  //Desplazamiento
  let posicion = 10;
  function mover(){
    let desplazamiento = document.getElementById('desplazamiento');
    desplazamiento.style.left = `${posicion}px`;
    posicion += 5;
  }
  setInterval(mover, 50);


}

function construir(){
  //console.log('Construyo');
  let div = document.getElementsByClassName('borde')[0];
  //console.log(div);
  ////// innerHTML es muy lento y no se suele usar
  //div.innerHTML = '<p>Este es un texto <span class="negrita">en negrita</span>.</p>';
  //P
  let p = document.createElement('p');
  div.appendChild(p); //Se suele asignar el hijo al padre nadamás se cree el hijo
  //NODO TEXTO P
  let nodotexto = document.createTextNode('Este es un texto');
  p.appendChild(nodotexto);

  //SPAN
  let span = document.createElement('span');
  p.appendChild(span);
  span.classList.add('negrita');
  span.classList.add('borde');
  //NODO TEXTO SPAN
  nodotexto = document.createTextNode(' en negrita');
  span.appendChild(nodotexto);

  //NODO TEXTO P
  nodotexto = document.createTextNode('.');
  p.appendChild(nodotexto);

  //nodoPadre.insertBefore(nodoAintroducir, nodoReferencia);
  //IMG
  let img = document.createElement('img');
  div.insertBefore(img, p);
  //Crear atributo src
  img.setAttribute('src', 'img/cacatua.jpg');
  //img.src = 'img/cacatua.jpg'; //A veces funciona elemento.atributo = valor, con según que elemento y que atributo

}

function destruir(){

  let div = document.getElementsByClassName('borde')[0];
  let p = document.querySelector('.borde > p');
  //console.log(p.innerHTML);
  //div.removeChild(p); //Así le indicamos al padre que mate al hijo
  p.remove();

}

function destruirTodo(){

  let div = document.getElementsByClassName('borde')[0];
  while(div.firstElementChild){
    div.firstElementChild.remove()
  }

}
