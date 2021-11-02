export default function testerResponsive(form) {
const $form = document.getElementById(form)
let ventana;
 document.addEventListener("submit", (e) => {
     if(e.target === $form) {
        e.preventDefault();
        ventana = window.open($form.url.value,"ventana1",`innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`)
     }
 })
 document.addEventListener("click", (e) => {
     if(e.target === $form.cerrar)
     ventana.close()
 })
}
//MEJORAR CON CSS Y SUBIRLO A CODEPEN