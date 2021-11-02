const d = document,
  w = window;
export default function videonInteligente() {
//LO hago con fata-atributes xq si en un fututo quiero que mas videos tengan esta funcion, solo le agrego a la etiqueta de ese video : data-media-video
let $videos = document.querySelectorAll("video[data-smart-video]")
let callback = (entries)=> {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.play()
        }
        else{
            entry.target.pause()
        }

        w.addEventListener("visibilitychange", (e) =>  {
            d.visibilityState === "visible"
             ? entry.target.play()
             : entry.target.pause()
        })
    });
}
 let observer = new IntersectionObserver(callback,{
    threshold : 0.5
 })
 $videos.forEach(el => {
    observer.observe(el)
 })
}