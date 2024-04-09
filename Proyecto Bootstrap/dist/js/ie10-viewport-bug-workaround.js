/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// https://getbootstrap.com/docs/3.4/getting-started/#support-ie10-width

(function () {
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }

})();
//* parte editada *//
//rotacion tarjeta//
const tarjeta = document.querySelector('#tarjeta')
,btnAbrirFormulario = document.querySelector('#btn-abrir-formulario')
,formulario = document.querySelector('#formulario-tarjeta')
,numeroTarjeta=document.querySelector('#tarjeta .numero')
,nombreTarjeta=document.querySelector('#tarjeta .nombre')
,logoMarca = document.querySelector('#logo-marca')
,firma = document.querySelector('#tarjeta .firma p')
,mesExpiracion=document.querySelector('#tarjeta .mes')
,yearExpiracion=document.querySelector('#tarjeta .year')
,ccv=document.querySelector('#tarjeta .ccv');

//volteamos tarjeta frente
const mostrarFrente = () =>{
  if(tarjeta.classList.contains('active')){
    tarjeta.classList.remove('active');
  }
}

//volteamos targeta tracera
const mostrarTrasera = () =>{
  if(!tarjeta.classList.contains('active')){
    tarjeta.classList.toggle('active');
  }
}

//rotacion de la tarjeta
tarjeta.addEventListener('click',() => {
  tarjeta.classList.toggle('active');
});

//boton abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
  btnAbrirFormulario.classList.toggle('active');
  formulario.classList.toggle('active');
})

//rellenar mes //
for(let  i = 1 ; i <= 12; i++ ){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}

//rellenar año//
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual+8; i++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}
///validacion///
//numero de targeta//
formulario.inputNumero.addEventListener('keyup', (e) =>{
  let valorInput = e.target.value;
  formulario.inputNumero.value = valorInput
  //eliminamos espacios en blanco
  .replace(/\s/g,'')
  //eliminar letras//
  .replace(/\D/g,'')
  ///espacio cada 4 numeros//
  .replace(/([0-9]{4})/g,'$1 ')
  //elimina el ultimo espacio//
  .trim();

  numeroTarjeta.textContent = valorInput;

  if(valorInput ==''){
    numeroTarjeta.textContent = '#### #### #### ####';
    logoMarca.innerHTML = '';
  }

  if(valorInput[0]==4){
    logoMarca.innerHTML='';
    const imagen = document.createElement('img')
    imagen.src='../imagenes/logo-visa.png';
    logoMarca.appendChild(imagen);
  }else if(valorInput[0]==5){
    logoMarca.innerHTML='';
    const imagen = document.createElement('img');
    imagen.src ='../imagenes/master.png';
    logoMarca.appendChild(imagen);
  }

  //volteamos tarjeta otra vez hacia el frente
mostrarFrente();
});

//* input nombre de usuario
formulario.inputNombre.addEventListener('keyup',(e) =>{
  let valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;

  if(valorInput ==''){
    nombreTarjeta.textContent = 'yeinner andrés ascanio ascanio';
  }
  mostrarFrente();
});

//* selector del mes
formulario.selectMes.addEventListener('change',(e) => {
  mesExpiracion.textContent=e.target.value;
  mostrarFrente();
});

//*selector del año
formulario.selectYear.addEventListener('change',(e) => {
  yearExpiracion.textContent=e.target.value.slice(2);
  mostrarFrente();
});

//* codigo del ccv

formulario.inputCCV.addEventListener('keyup',() => {
  mostrarTrasera();
  formulario.inputCCV.value=formulario.inputCCV.value
  //eliminar espacios
  .replace(/\s/g,'')
  //eliminar letras
  .replace(/\D/g,'');
  ccv.textContent=formulario.inputCCV.value;
});


