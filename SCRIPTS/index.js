import { encriptar, desencriptar } from "./script.js";

document.getElementById("encriptar").addEventListener("click", function () {
    const mensaje = document.getElementById("mensaje").value;
    const clave = parseInt(document.getElementById("clave").value);
    let msgEncriptado;
    msgEncriptado = encriptar(mensaje, clave);
    document.getElementById("encriptado").value=msgEncriptado;
    document.getElementById("mensaje").value="";
})

document.getElementById("desencriptar").addEventListener("click", function () {
    const mensaje = document.getElementById("encriptado").value;
    const clave = parseInt(document.getElementById("clave").value);
    let msgDesencriptado;
    msgDesencriptado = desencriptar(mensaje, clave);
    document.getElementById("mensaje").value=msgDesencriptado;
    document.getElementById("encriptado").value="";
})