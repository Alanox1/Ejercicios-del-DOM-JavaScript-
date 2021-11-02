const n = navigator,
  ua = navigator.userAgent
export default function userDeviceInfo(id) {
    //PARA PROBAR LOS DISPOSITIVOS, PONGO CONSOLA Y ABRO EL CUADRADO PARA VER LA PERSPECTIVA DE LOS CELULARES
    const $id = document.getElementById(id),
     isMobile = {
         android : () => ua.match(/android/i),
         ios : () => ua.match(/iphone/i),
         windows : () => ua.match(/windows phone/i),
         //EL ANY QUIERE DECIR, NO ME IMPORTA QUE DISPOSITIVO SEA, LO IMPORTANTE ES QUE SEA UN MOVIL , NO IMPORTA LA MARCA
         any : function() {
             return this.android() || this.ios() || this.windows()
         },
     },
     isDesktop = {
        linux : () => ua.match(/linux/i),
        mac : () => ua.match(/mac os/i),
        windows : () => ua.match(/windows nt/i),
      
        any : function() {
            return this.linux() || this.mac() || this.windows()
        },
     },
     isBrowser = {
        chrome : () => navigator.userAgent.match(/chrome/i),
        safari : () => navigator.userAgent.match(/safari/i),
        firefox : () => navigator.userAgent.match(/firefox/i),
        opera : () => navigator.userAgent.match(/opera || opera mini/i),
        ie : () => navigator.userAgent.match(/msie || iemobile/i),
        edge : () => navigator.userAgent.match(/edge/i),
        any : function() {
            return this.chrome() ||
             this.safari() ||
             this.firefox() ||
             this.opera() ||
             this.ie() ||
             this.edge() 
        },
     };
     console.log(navigator.userAgent)
    console.log(isMobile.android())
    console.log(isMobile.ios())
    console.log(isMobile.any());

    $id.innerHTML = `
                    <ul>
                    <li>User Agent <b>${navigator.userAgent}</b></li><br>
                    <li>Plataforma <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li><br>
                    <li>Navegador <b>${isBrowser.any()}</b></li>
                    </ul>
    `

    /*CONTENIDO EXCLUSIVO*/ 
    if(isBrowser.chrome()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en chrome</mark></p>`
    }
    if(isBrowser.firefox()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en firefox</mark></p>`
    }
    if(isDesktop.linux()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software en linux</mark></p>`
    }
    if(isDesktop.mac()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software en mac</mark></p>`
    }
    if(isDesktop.windows()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software en windows</mark></p>`
    }


    
    /*REDIRECCIONES*/ 

    if(isMobile.android()) {
        window.location.href += `https://jonmircha.com`
    }
}

