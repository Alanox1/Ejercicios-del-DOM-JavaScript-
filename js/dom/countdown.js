
export default function countdown(id,fecha,texto) {
 const $countdown = document.getElementById(id),
  countdownDate= new Date(fecha).getTime();

   let countdownTempo = setInterval(() => {
         let now = new Date().getTime(),
         limitTime = countdownDate - now,
         days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
         hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
         minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
         seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2);
         
         $countdown.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos</h3>`
         if(limitTime < 0 ) {
             clearInterval(countdownTempo)
              $countdown.innerHTML = `${texto}`
            }
   }, 1000);
}