let segundos = 0;
let minutos = 0;

function incrementa_segundos() {
    segundos++;
    if (segundos === 5) {
        // Parar o tempo
        document.getElementById("stopTime").innerHTML = "<strong>Game Over!</strong>"
        clearInterval(timer);
    }

    let cronometro = document.getElementById("cronometro");
    
    if (segundos < 10) {
        if (minutos < 10) {
            cronometro.innerHTML = `0${minutos}:0${segundos}`;
        } else {
            cronometro.innerHTML = `${minutos}:0${segundos}`;
        }
    } else {
        // Completa 1 minuto
        segundos = 0;
        minutos++;
        if (minutos < 10) {
            cronometro.innerHTML = `0${minutos}:${segundos}`;
        } else {
            cronometro.innerHTML = `${minutos}:${segundos}`;
        }
    }
}

// 1 segundo tem 1000 milisegundos
// setInterval chama a função do primeiro parâmetro a cada x milisegundos
let timer = setInterval(incrementa_segundos, 1000);

