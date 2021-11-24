import countDown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import {digitalClock, alarm} from './dom/reloj.js'
import { moveBall,shortcuts } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#reloj2","#iniciar-reloj", "#parar-reloj")
    alarm("assets/car-alarm.mp3", "#iniciar-alarma", "#parar-alarma", "#alarma")
    countDown("#countdown", "Dec 01, 2021 00:05:20", "Feliz Cumpleaños LoraLita")

});
d.addEventListener("keydown", (e)=>{
    shortcuts(e)
    moveBall(e, ".ball", ".stage")
})
