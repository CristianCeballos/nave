var patas = document.getElementsByClassName("patas");
//console.log(patas);

var numero = 0;
var bandera = true;

function parpadeoColores() {
    setInterval(() => {
        patas[numero].className = "patas pataActiva";
        if (bandera) {
            patas[numero].style.backgroundColor = "red";
        } else {
            patas[numero].style.backgroundColor = "blue";
        }
        numero++;
        if (numero == patas.length) {
            numero = 0;
            bandera = !bandera;
        }
    }, 1000);
}


function parpadeo() {
    setInterval(() => {

        if (bandera) {
            for (let i = 0; i < patas.length; i++) {
                const element = patas[i];
                element.style.backgroundColor = "orange";
            }
            bandera = !bandera;
        } else {
            for (let i = 0; i < patas.length; i++) {
                const element = patas[i];
                element.style.backgroundColor = "#080808";
            }
            bandera = !bandera;
        }
    }, 2500);
}


var idTimer;    //id del timer

function lucesSecuenciales() {
    var cuerpos = document.getElementsByClassName("cuerpo");
    //console.log(cuerpos);
    var c = 0;

    idTimer = setInterval(() => {
        if (c < cuerpos.length) {
            cuerpos[c].className = "cuerpo cuerpoActivo";
            if (c > 0) {
                cuerpos[c - 1].className = "cuerpo";
            } else {
                cuerpos[cuerpos.length - 1].className = "cuerpo";
            }
            c++;
            // console.log(c);
        } else {
            c = 0;
        }
    }
        , 500);
}

function encenderLucesDuales() {
    var cuerpos = document.getElementsByClassName("cuerpo");
    var c = 0;
    var mitad = cuerpos.length / 2;
    var bandera = true;
    idTimer = setInterval(() => {
        if (bandera) {
            if (c < mitad) {
                cuerpos[c].className = "cuerpo cuerpoActivo";
                cuerpos[mitad + c].className = "cuerpo cuerpoActivo";

            } if (c > 0) {
                cuerpos[c - 1].className = "cuerpo";
                cuerpos[mitad - 1].className = "cuerpo";
            }

            c++;

        }
    }
        , 350);
}

encenderLucesDuales();

function apagarLucesSecuenciales() {
    clearInterval(idTimer);
    var cuerpos = document.getElementsByClassName("cuerpo");
    for (let i = 0; i < cuerpos.length; i++) {
        const element = cuerpos[i];
        element.className = "cuerpo";
    }
}

function encenderTodasLuces() {
    var cuerpos = document.getElementsByClassName("cuerpo");
    for (let i = 0; i < cuerpos.length; i++) {
        const element = cuerpos[i];
        element.className = "cuerpo cuerpoActivo";
    }
}

function apagarTodasLuces() {
    var cuerpos = document.getElementsByClassName("cuerpo");
    for (let i = 0; i < cuerpos.length; i++) {
        const element = cuerpos[i];
        element.className = "cuerpo";
    }
}

function encenderPropulsores() {
    var propulsores = document.getElementsByClassName("propulsor");
    for (let i = 0; i < propulsores.length; i++) {
        const element = propulsores[i];
        element.className = "propulsor encenderPropulsores";
    }
}

function apagarPropulsores() {
    var propulsores = document.getElementsByClassName("propulsor");
    for (let i = 0; i < propulsores.length; i++) {
        const element = propulsores[i];
        element.className = "propulsor";
    }
}

function encenderNave() {
    var trompa = document.getElementsByClassName("trompa");
    var propulsor = document.getElementsByClassName("propulsor");
    for (let i = 0; i < trompa.length; i++) {
        const element = trompa[i];
        element.className = "trompa naveEncendida";
    }
    for (let i = 0; i < propulsor.length; i++) {
        const element = propulsor[i];
        element.className = "propulsor propulsorActivo";
    }
}

function apagarNave() {
    var trompa = document.getElementsByClassName("trompa");
    var propulsor = document.getElementsByClassName("propulsor");
    for (let i = 0; i < trompa.length; i++) {
        const element = trompa[i];
        element.className = "trompa";
    }
    for (let i = 0; i < propulsor.length; i++) {
        const element = propulsor[i];
        element.className = "propulsor";
    }
}

//mover nave con teclas del teclado
function moverNave() {
    nave = document.getElementsByClassName("contenedor")[0];
    console.log(nave);
    nave.style.left = "300";
}

//Inicio del juego

// window.onload = function () {
//     document.getElementById("botonaso").addEventListener("click", mover);
// };

function iniciarJuego() {
    document.getElementById("botonaso").addEventListener("click", mover);
}

function getCordenada(min, max) {
    let cordenada = Math.floor(Math.random() * (max - min + 1) + min);
    return cordenada;
}

function mover() {
    let cordenada1 = getCordenada(0, 100);
    console.log("Valor coordenada 1: " + cordenada1);
    let cordenada2 = getCordenada(0, 450);
    console.log("Valor coordenada 2: " + cordenada2);
    document.getElementById("botonaso").style.left = cordenada1 + "px";
    document.getElementById("botonaso").style.top = cordenada2 + "px";

    coordenadasActuales();
}

function coordenadasActuales() {
    var elemento = document.getElementById('botonaso');
    var posicion = elemento.getBoundingClientRect();
    var x = posicion.left;
    console.log(posicion.left);
}
