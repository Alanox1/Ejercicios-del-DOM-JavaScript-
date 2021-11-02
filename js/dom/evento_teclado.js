let x = 0,
 y = 0;
 
 //IMPORTANTE, LAS VARIABLES (X) Y (Y) VAN DECLARADAS AFUERA DE LA FUNCION, SINO NO ANDA

export function moveBall(e,ball,stage) {
   const $stage = document.querySelector(stage),
    $ball = document.querySelector(ball),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
    console.log(e.keyCode);
    console.log(e.key)
   console.log(limitsBall,limitsStage)
   switch(e.keyCode) {
      case 37:
         if(limitsStage.left < limitsBall.left) {
            x--;
            e.preventDefault()
         }
        
         break;
      case 38:
         if(limitsStage.top < limitsBall.top) {
            y--
            e.preventDefault()
         }
         
         break;
      case 39:
         if(limitsStage.right > limitsBall.right) {
            e.preventDefault()
            x++
         }
          
         break;
         case 40:
            e.preventDefault()
               y++
            if(limitsStage.bottom < limitsBall.bottom) {
               alert("Has perdido");
               $ball.style.transform = `translate(${x * 0}px,${y * 10}px)`;
               
            }
            
         break;
      default:
         break;
        
   }
 $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
export function shortcuts(e) {
   // console.log(e.type)
   // console.log(`ctrl : ${e.ctrlKey}`)
   // console.log(`alt : ${e.altKey}`)
   // console.log(`shift : ${e.shiftKey}`)
   // console.log(e.key)
   // console.log(e.keyCode)
   // console.log(e);
   if(e.key === "a" && e.altKey) {
      alert("Has hecho un conjunto de letras y salio este aviso")
   }
}

