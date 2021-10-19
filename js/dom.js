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
