const preguntas = [
    "1. Rabo cortito y orejas largas, corro y salto muy ligerito. ¿Quién soy?",
    "2. ¿Dónde hay ríos sin agua, ciudades sin casas y bosques sin árboles?",
    "3. Pese a ser más pequeño que los demás se levanta más que todos si está motivado y contento. ¿Qué es?",
    "4. Hay 10 peces en una pecera, 2 se ahogaron, 4 nadaron lejos y 3 murieron. ¿Cuántos peces hay?",
    "5. Habla y no tiene boca, oye y no tiene oído, es chiquito y hace ruido, muchas veces se equivoca. ¿Quién soy?"
]
const opciones = [
    ["Cocodrilo", "Canguro", "Conejo", "Camello"],
    ["En Google Maps", "En el Mundo", "En la calculadora", "En el Cetpro"],
    ["El dedo meñique", "El pulgar", "El índice", "El anular"],
    ["10", "1", "7", "5"],
    ["La boca", "La calculadora", "El télefono", "La laptop"]
];

const claves = [
    ["", "", "Dyd", ""],
    ["gd", "", "", ""],
    ["", "Nhg", "", ""],
    ["dyud", "", "", ""],
    ["", "", "3", ""]
];

const PREGUNTA = [
     "𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀 𝟏",
     "𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀 𝟐", 
     "𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀 𝟑", 
     "𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀 𝟒",
     "𝐄𝐒𝐓𝐄 𝐄𝐒 𝐄𝐋 𝐍Ú𝐌𝐄𝐑𝐎 𝐏𝐀𝐑𝐀 𝐃𝐄𝐒𝐄𝐍𝐂𝐑𝐈𝐏𝐓𝐀𝐑"
]


var i = 0; //Indice de pregunta
var puntaje = "";
var intervalo;
//Eventos
document.getElementById('op1').addEventListener("click", function () {
    event.preventDefault()
    actualizarPuntaje(1);
})
document.getElementById('op2').addEventListener("click", function () {
    event.preventDefault()
    actualizarPuntaje(2);
})
document.getElementById('op3').addEventListener("click", function () {
    event.preventDefault()
    actualizarPuntaje(3);
})
document.getElementById('op4').addEventListener("click", function () {
    event.preventDefault()
    actualizarPuntaje(4);
})

//Operaciones (funciones)

function mostrarPregunta() {
    document.getElementById('titulos').innerHTML = PREGUNTA[i]
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
    document.getElementById('op4').innerHTML = opciones[i][3];

    iniciarCronometro();
}

function iniciarCronometro() {
    var duración = 40;
    var cronometro = document.getElementById('cronometro');
    cronometro.innerHTML = "00:40"
    iniciarTiempo(duración, cronometro);
}

function iniciarTiempo(tiempo, elemento) {
    intervalo = setInterval(() => {
        if (tiempo == 0) {
            actualizarPuntaje();
        } else {
            tiempo = tiempo - 1;
            elemento.textContent = "00:" + tiempo;
        }
    }, 1000);
}

function actualizarPuntaje(valor) {
    clearInterval(intervalo);
    if (valor) {
        valor = valor - 1;
        puntaje = puntaje + claves[i][valor];
    }

    i = i + 1;
    if (preguntas.length > i) {
        mostrarPregunta();
    } else {
        console.log(puntaje)
        localStorage.setItem("puntaje", puntaje);
        location.href = "textoencriptado.html";
    }

}

mostrarPregunta();






