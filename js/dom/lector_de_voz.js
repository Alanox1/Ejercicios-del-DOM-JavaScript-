// export default function narrador() {
//     const $form  = document.querySelector(".form-talk"),
//     $select = document.querySelector(".select")
//     const synth = window.speechSynthesis
  

//  window.addEventListener("load", e => {
//   const voces = synth.getVoices()
//   for(let i = 0;i<voces.length;i++) {
//       let $options = document.createElement("option");
//       $options.textContent = voces[i].name;
//       $options.lang = voces[i].lang
//       $select.appendChild($options)
//   }
//  })
//  document.addEventListener("submit", (e) => {
//      e.preventDefault()
//     if(e.target === $form) {
//       const text2 = $form.texto.value
//     // console.log($select.options[$select.selectedIndex].lang)
//     //    console.log($select.lang)
//       const utterThis = new SpeechSynthesisUtterance(text2);
//       let idioma = "" + $select.options[$select.selectedIndex].lang + ""
//       utterThis.lang = $select.options[$select.selectedIndex].lang 
//         synth.speak(utterThis)
//      }
//  })

 
 
 


// }

