const d = document
export default function validarFormulario() {
    const $form = document.querySelector(".contact-form"),
    //Esta es una forma de capturar solo los input que me interesa capturar, con form input[atributo]
     $inputs = document.querySelectorAll(".contact-form [required]");
 
     $inputs.forEach(el => {
        const $span = document.createElement("span")
        $span.textContent = el.title;
        $span.id = el.name
        $span.classList.add("contact-form-error","none")
        el.insertAdjacentElement("afterend",$span)
     });

     //Las validaciones se pueden hacer tambien con el evento submit, y que aparezcan solo al mandarse el formulario, eso queda en cada uno
    d.addEventListener("keyup", e=> {
        if(e.target.matches(".contact-form [required]")) {
            let $input = e.target,
             pattern = $input.pattern || $input.dataset.pattern; //Si el input no tiene un atributo pattern, seguramente tiene un data-atribute

             if(pattern && $input.value !== ""){
                // console.log("El input tiene patron")
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                 ? d.getElementById($input.name).classList.add("is-active")
                 : d.getElementById($input.name).classList.remove("is-active")
             }
             if(!pattern){
                //console.log("El input no tiene patron")
                return $input.value === ""
                 ? d.getElementById($input.name).classList.add("is-active")
                 : d.getElementById($input.name).classList.remove("is-active")
             }
        }
    })

    d.addEventListener("submit", e => {
        if(e.target === $form) {
        // e.preventDefault();
        alert("Enviando formulario")

        const $loader = d.querySelector(".contact-form-loader"),
          $response = d.querySelector(".contact-form-response")
 
          $loader.classList.remove("none")
 
        setTimeout(() => {
        $loader.classList.add("none")
        $response.classList.remove("none")
        $form.reset();
        setTimeout(() => $response.classList.add("none"), 3000);
        }, 3000);
        }
    
})
       
}
