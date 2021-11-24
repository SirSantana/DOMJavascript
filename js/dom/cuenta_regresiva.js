
const d = document;
export default function countDown (id, limitDate, messageFinal){
    
           let countdowndate = new Date(limitDate).getTime()

   let countdowntempo = setInterval(() => {

    let now = new Date().getTime(),
    limitTime = countdowndate - now,
    days = Math.floor(limitTime/(1000*60*60*24)),
    hours = Math.floor((limitTime % (1000*60*60*24)) /(1000*60*60)),
    minutes = Math.floor((limitTime % (1000*60*60)) /(1000*60)),
    seconds = Math.floor((limitTime % (1000*60)) /(1000))

    d.querySelector(id).innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos y ${seconds} segundos</h3>`
      
    console.log(countdowndate, now, limitTime)
   }, 1000);


}