
const d = document;
let x = 0,
    y = 0

export function moveBall (e, ball ,stage){
    const $ball = d.querySelector(ball),
          $stage = d.querySelector(stage),
          limitsBall =$ball.getBoundingClientRect(), 
          limitsStage =$stage.getBoundingClientRect()
               

    switch (e.keyCode) {
        case 37:
            e.preventDefault()
             x--
            // move("left")
            break;
        case 38:
            e.preventDefault()
            y--
            // move("up")
            break;
        case 39:
            e.preventDefault()
            x++
            // move("right")
            break;
        case 40:
            e.preventDefault()
            y++
            // move("down")
            break;
    
        default:
            break;
        
    }      
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`
    

}

export function shortcuts(e){
    
    console.log(e)
    if(e.key === "y" && e.altKey){
       return prompt("LORALITA")
    }
    if(e.key === "g" && e.ctrlKey){
        return alert("CMD 2")
     }
}