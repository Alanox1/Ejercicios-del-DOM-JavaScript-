export default function scrollButton(button) {
const $botonScroll = document.querySelector(button)
document.addEventListener("click", (e) => {
    if(e.target.matches(button) || e.target.matches(`${button} *`) ){  
            // scroll(0,0)       
            scrollTo({
                behavior : "smooth",
                top : 0
            })     
    }
})
window.addEventListener("scroll", e=> {
    if(window.scrollY > 400){
        $botonScroll.classList.add("mostrar")
    }
    else if(window.scrollY < 400) {
        
        
        $botonScroll.classList.remove("mostrar")
    }
})}