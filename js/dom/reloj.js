export function digitalClock(clock,btnPlay,btnStop) {

 let clockTempo;
 document.addEventListener("click", (e) => {
     if(e.target.matches(btnPlay)){
        clockTempo = setInterval(() => {
        let fecha = new Date();
        document.querySelector(clock).innerHTML = `<h3> ${fecha.toLocaleTimeString()}</h3>`
        },1000);
        e.target.disabled = true
     }
     if(e.target.matches(btnStop)){
        clearInterval(clockTempo);
        document.querySelector(clock).innerHTML = null;
        document.querySelector(btnPlay).disabled = false;
    }  
 })
}


export function alarm(audio,btnEncender,btnApagar) {
let alarmTempo;
const $etiquetaAudio = document.createElement("audio");
$etiquetaAudio.setAttribute("src",audio)
document.addEventListener("click", (e) => {
    if(e.target.matches(btnEncender)){  
       alarmTempo =  setTimeout(() => {
        $etiquetaAudio.play();
        },2000);
        document.querySelector("#encender-alarma").disabled = true;
    }
    if(e.target.matches(btnApagar)){
        $etiquetaAudio.pause()
        clearTimeout(alarmTempo)
        document.querySelector("#encender-alarma").disabled = false
    }
})
}
console.log(document)