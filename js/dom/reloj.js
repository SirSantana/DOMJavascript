  
const d = document;
export function digitalClock (reloj, reloj2, iniciarBtn, pararBtn){

    let clockGlobal;
    d.addEventListener("click", (e)=>{
        if(e.target.matches(iniciarBtn)){
          clockGlobal = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString()
                d.querySelector(reloj).innerHTML = `<h3>${clockHour}</h3>`

                let clockHour2 = new Date().toLocaleDateString()
                d.querySelector(reloj2).innerHTML = `<h3>${clockHour2}</h3>`
                
            }, 1000);
            e.target.disabled = true;
        }
        if(e.target.matches(pararBtn)){
            clearInterval(clockGlobal);
            
            d.querySelector(reloj).innerHTML = `<h3>PAUSE</h3>`
            d.querySelector(reloj2).innerHTML = null
            d.querySelector(iniciarBtn).disabled = false;

        }
    })
    
}
export function alarm(sound, btnPlay, btnPause, alarma){

    let alarm;
    const $alarm = d.createElement("audio")
    $alarm.src = sound

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){
            alarm = setTimeout(() => {
                $alarm.play();
                d.querySelector(alarma).innerHTML = `<h3>ALARM!</h3>`
            }, 2000);
            
            e.target.disabled = true

        }
        if(e.target.matches(btnPause)){

            $alarm.pause();
            $alarm.currentTime = 0
            d.querySelector(btnPlay).disabled = false;
            d.querySelector(alarma).innerHTML = `<h3>PAUSE</h3>`


        }
    })



}
