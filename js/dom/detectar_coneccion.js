export default function detectarConexion(div) {
     function isOnLine() {
        let $div = document.createElement("div")
        if(navigator.onLine) {
            $div.textContent = "Conexión Reestablecida"
            $div.classList.add("online")
            $div.classList.remove("offline")
        }else {
            $div.textContent = "Conexión Perdida"
            $div.classList.add("offline")
            $div.classList.remove("online")    
        }
        document.body.insertAdjacentElement("afterbegin",$div)
        setTimeout(() => {
            document.body.removeChild($div)
        }, 2000);
    }
     
window.addEventListener("online", (e) => {
    isOnLine() 
})
window.addEventListener("offline", (e) => {
     isOnLine()    
})   
}