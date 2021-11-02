export default function geolocalizacion(latitud,longitud,presicion) {
const $latitud = document.querySelector(latitud),
 $longitud = document.querySelector(longitud),
 $presicion = document.querySelector(presicion);

    navigator.geolocation.getCurrentPosition(sucess,error)
    function sucess(position) {
        let latitud = position.coords.latitude,
         longitud = position.coords.longitude,
         presicion = position.coords.accuracy;

        $latitud.innerHTML = `Tu latitud es :<strong>${latitud}</strong>`;
        $longitud.innerHTML = `Tu longitud es : <strong>${longitud}</strong>`;
        $presicion.innerHTML = `Tu presicion es : <strong>${presicion}</strong> metros`;
        document.querySelector(".mapa2").setAttribute("href",`https://www.google.com/maps/@${latitud},${longitud},17z`)
        document.querySelector(".mapa2").setAttribute("target",`_blank`)
        document.querySelector(".mapa2").setAttribute("rel",`noopener`)
}
       function error(error) {
       $latitud.innerHTML = ` ${error.code}  + ${error.message}`
}
}


// export default function getGeolocation(id) {
// const $id = document.getElementById(id),
//  options = {
//      enableHighAccuracy : true, //Para que tome la mejor lectura
//      timeout : 5000,
//      maximumAge : 0 //Para que no se guarden en cache las lecturas
//  };

//  const sucess = (positon) => {
//  console.log(positon)
//  const coords = positon.coords
//  $id.innerHTML  =  ` <p>Tu posición actual es : </p>
//                      <ul>
//                         <li>Latitud: <b>${coords.latitude}</b></li>
//                         <li>Longitud: <b>${coords.longitude}</b></li>
//                         <li>Presición: <b>${coords.accuracy}</b> metros </li>
//                           <a href="`https://www.google.com/maps/@${latitud},${longitud},17z`">Ver en Google Maps</a>
//                      </ul> `
//  }

//  const error = (error) => {
//      $id.innerHTML = `<p><mark>Error : ${error.code} : ${error.message}</mark><p>`
//      console.log(`Error : ${error.code} : ${error.message}`)
// }
//  navigator.geolocation.getCurrentPosition(sucess,error,options)
// }