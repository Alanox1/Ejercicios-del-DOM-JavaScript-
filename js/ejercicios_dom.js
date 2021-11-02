// const $panel = document.querySelector(".panel"),
//   $boton = document.getElementById("boton");

// $boton.addEventListener("click", e => {
//     $panel.classList.toggle("esconder")
// });

import hamburgerMenu from "./dom/menu-hamburguesa.js";
import {digitalClock,alarm} from "./dom/reloj.js";
import {moveBall, shortcuts } from "./dom/evento_teclado.js";
//import {countdown} from "./dom/countdown.js";
import countdown from "./dom/countdown.js";
import scrollButton from "./dom/scrollButton.js";
//import darkmode from "./dom/darkmode.js";
import darkTheme from "./dom/darkmode-theme.js";
import responsiveMedia from "./dom/objeto_responsivo.js";
import testerResponsive from "./dom/tester-responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import detectarConexion from "./dom/detectar_coneccion.js";
import webcam from "./dom/deteccion_webcam.js";
import geolocalizacion from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import sorteoDigital from "./dom/sorteo_digital.js";
import slider from "./dom/responsive_slider.js";
import videonInteligente from "./dom/video_inteligente.js";
import validarFormulario from "./dom/validacion_form.js";
import scrollSpy from "./dom/scroll_inteligente_vJon.js";
//import narrador from "./dom/lector_de_voz.js";
import speechReader from "./dom/narrador.js";

// import getGeolocation from "./dom/geolocalizacion.js";

document.addEventListener("DOMContentLoaded", e =>{
  hamburgerMenu("#boton",".panel",".ul a");
  digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
  alarm("js/assets/alarma.mp3","#encender-alarma","#apagar-alarma");
 countdown("countdown","August 05 2022 20:20:26","Feliz Año Nuevo!!!")
 scrollButton(".scroll")
 //darkmode(".darkmode-button");
 responsiveMedia("youtube","(min-width : 1024px)",'<a target="_blank" href="https://www.youtube.com/embed/Q4u8VqnFHtM">Ver video</a>','<iframe width="560" height="315" src="https://www.youtube.com/embed/Q4u8VqnFHtM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
 responsiveMedia("gmaps","(min-width : 1024px)",
 '<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895342!2d-58.38375908519525!3d-34.60373446500502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1628820472659!5m2!1ses-419!2sar">Ver Mapa</a>',
 '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895342!2d-58.38375908519525!3d-34.60373446500502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1628820472659!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
 testerResponsive("form")
 userDeviceInfo("user-device")
 webcam("webcam")
geolocalizacion(".latitud",".longitud",".presicion")
// getGeolocation("mapa")
searchFilters(".filtercard",".card")
sorteoDigital(".sorteo-boton",".player")
slider()
scrollSpy()
videonInteligente()
validarFormulario(".username")
//narrador()

});


//AL TERMINAR LOS EJERCICIOS EMPEZAR FREECODECAMP CON EL VIDEO DE ELLOS, PARA REPASAR LAS BASES COMO DIJIERON ELLOS


//ALARMA SONORA HECHA POR MI
// const $encenderAlarma = document.querySelector(".alarma-contenedor .alarma-inicio"),
//   $detenerAlarma = document.querySelector(".alarma-contenedor .alarma-fin")
// function repro() {
//   $encenderAlarma.children[0].setAttribute("src","js/alarma.mp3")
//   $encenderAlarma.children[0].play();
//   $encenderAlarma.disabled = true;
// }
// $encenderAlarma.addEventListener("click",repro );
// $detenerAlarma.addEventListener("click", e=> {
//   $encenderAlarma.children[0].pause();
//   $encenderAlarma.disabled = false;
// })



// document.addEventListener("keydown", (e) => {
//  shortcuts(e);
//    moveBall(e,".ball",".stage")
//  })



//Estas funciones estan aca porque dentro tienen un DOMContentLoaded y no pueden estar dentro del DOMContentLoaded de arriba
darkTheme(".darkmode-theme","dark-mode");
detectarConexion("mensaje")
speechReader()

  // const $video = document.querySelector(".video"),
  //  $mapa = document.querySelector(".mapa");


  // window.addEventListener("resize", (e) => {
  //   console.clear()
  //   let mediaQueryList = window.matchMedia("(max-width:600px)")
  //   console.log(mediaQueryList)
  //   mediaQueryList.addEventListener( "click", function(eventoMediaQueryList) {
  //     console.log(`Ejecutando el evento ${eventoMediaQueryList}`)
    
  // })
  
  // })
  //   if(mediaQueryList.matches) {
  //     $video.innerHTML = `<a href="https://www.youtube.com/embed/9F5Qpore51M">Ver video</a>`
  //     $mapa.innerHTML = `<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.106460231254!2d-58.00207797510709!3d-31.3857779998768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95adc2a601e30957%3A0xc3f08b324881ffbc!2sN%C3%A9stor%20Garat%20680%2C%20Concordia%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1628715542512!5m2!1ses-419!2sar">Ver mapa</a>`
  //   }
  //   else{
  //     $mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.106460231254!2d-58.00207797510709!3d-31.3857779998768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95adc2a601e30957%3A0xc3f08b324881ffbc!2sN%C3%A9stor%20Garat%20680%2C%20Concordia%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1628715542512!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  //     $video.innerHTML = `<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/9F5Qpore51M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  // }})

  
// let letras = "";
// const $formFiltro = document.getElementById("formfiltro"),
//  $cartas = document.querySelectorAll(".card");
//   $formFiltro.filtro.addEventListener("keyup", (e) => {
//     letras = $formFiltro.filtro.value
//     //  console.log(letras)
//     $cartas.forEach(el => {
//       // console.log(el.textContent.toLowerCase().includes(letras))
//       if(el.textContent.toLowerCase().includes(letras) === false) {
//        el.setAttribute("style","display:none;")
//       }
//       else{
//         el.removeAttribute("style")
//       }
//     })
   
// })



