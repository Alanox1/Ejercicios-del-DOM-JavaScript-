export default function sorteoDigital(input,selector) {

    // document.addEventListener("click", (e) => {
        
    //      let arreglo = document.querySelectorAll(selector),
    //       aleatorio = Math.floor(Math.random() * arreglo.length);
    //     if(e.target.matches(input)) {
    //         alert(`El ganador es: ${arreglo[aleatorio].textContent}`);
    //         console.log(`El ganador es: ${arreglo[aleatorio].textContent}`)
    //     }
    // })

    const getWinner =  (selector) => {
         let $players = document.querySelectorAll(selector),
          random = Math.floor(Math.random() * $players.length),
          winner = $players[random]

          return `El ganador es: ${winner.textContent}`
    }
    

    document.addEventListener("click", (e)=> {
        if(e.target.matches(input)) {
            let result = getWinner(selector);
            alert(result);
            console.log(result)
        }
    })

}

const getWinnerComments =  (selector) => {
    let $players = document.querySelectorAll(selector),
     random = Math.floor(Math.random() * $players.length),
     winner = $players[random]

     return `El ganador es: ${winner.textContent}`
}
// getWinnerComments("#header-author #author-text span") 
//getWinnerComments("ytd-comment-thread-renderer #author-text span") 
// Esto es para hacer un sorteo con los comentarios de Youtube, en la consola del navegador copio la funcion y le doy enter, luego la ejecuto con esos parametro y funciona. Esto se puede hacer con Facebook, twitter etc.
//Sino ver el video de jon sorteo - digital