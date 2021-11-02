export default function webcam(id) {
const $video = document.getElementById(id);
// console.log(navigator.mediaDevices.getUserMedia)

//Consultamos si en el navegador existe la funcion : mediaDevices.getUserMedia
if(navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video : true, audio : false})
    .then(stream => {
        console.log(stream)
        $video.srcObject = stream;
        $video.play();
    })
    .catch((err) => {
        $video.insertAdjacentHTML("afterbegin",err)
        console.log(`Sucedió el siguiente error : ${err}`)})
    }
}