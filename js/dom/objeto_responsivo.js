export default function responsiveMedia(id,mq,contentMobile,contentDesk) {
 let breakpoint = matchMedia(mq);
 const responsive = (e) => {
     if(e.matches){
      document.getElementById(id).innerHTML = contentDesk;
      
     }else{
        document.getElementById(id).innerHTML = contentMobile;
     }
     
     console.log(e.matches)
 }
 //Este seria el resize
 breakpoint.addListener(responsive)

 //Esto seria el DOMContentLoad o el Load
 responsive(breakpoint)
}