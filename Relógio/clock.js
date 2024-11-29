const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval (function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let minu = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = minu;
    segundos.textContent = seg;

    if (hr < 10) hr = '0' + hr;
    if (minu < 10) minu = '0' + minu;
    if (seg < 10) seg = '0' + seg;
})


