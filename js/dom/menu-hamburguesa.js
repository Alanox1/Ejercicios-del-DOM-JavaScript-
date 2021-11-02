export default function hamburgerMenu(panelBtn,panel,menuLink){
document.addEventListener("click", (e)=> {
    if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
       document.querySelector(panel).classList.toggle("esconder");
    }
    if(e.target.matches(menuLink)){
        document.querySelector(panel).classList.remove("esconder");
    }
});
}
/*TODO ESTE CODIGO LO PUEDO LLEVAR A OTRO PROYECTO Y LO UNICO QUE TENGO QUE SABER ES QUE TENGO QUE IMPORTAR EN EL DOMContentLoaded los 3 parametros (boton,panel y LIs) en el main de .js , asi :

import hamburgerMenu from "./dom/menu-hamburguesa.js";

document.addEventListener("DOMContentLoaded", e =>{
  hamburgerMenu("#boton",".panel",".ul a");
 
});*/ 