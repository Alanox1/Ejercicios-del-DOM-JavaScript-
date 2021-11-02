const d = document;
export default function searchFilters(input,selector) {
d.addEventListener("keyup", (e)=> {
  if(e.target.matches(input)) {
      if(e.key === "Escape") e.target.value = ""
      d.querySelectorAll(selector).forEach((el) => {
          el.textContent.toLowerCase().includes(e.target.value)
            ? el.classList.remove("filter")
            : el.classList.add("filter")
      });
  }
});
}

//Para Que esta funcion SEARCHFILTER funcione, en index.js el primer parametro hace referencia al input que va a buscar y el segundo parametro hace referencia al tipo de selector en el que va a buscar dentro de su propiedad textContent