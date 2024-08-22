function encriptar(mensaje, clave){
    /*const mensaje = document.getElementById("mensaje").value;
    const clave = parseInt(document.getElementById("clave").value);*/
    var codCaracter;
    var nuevoCaracter;
    var msgEncriptado="";
    for(let i = 0; i < mensaje.length; i++){
         codCaracter = mensaje.charCodeAt(i);
         nuevoCaracter = conseguirCaracter(codCaracter,clave);
         msgEncriptado += String.fromCharCode(nuevoCaracter);
}
return msgEncriptado;
}

function desencriptar(mensaje, clave){
    /*const mensaje = document.getElementById("encriptado").value;
    const clave = parseInt(document.getElementById("clave").value)*-1;*/
    clave = clave * -1 
    var codCaracter;
    var nuevoCaracter;
    var msgDesencriptado=""; 
    for(let i = 0; i < mensaje.length; i++){
         codCaracter = mensaje.charCodeAt(i);
         nuevoCaracter = conseguirCaracter(codCaracter,clave);
         msgDesencriptado += String.fromCharCode(nuevoCaracter);
}
return msgDesencriptado;
}


function conseguirCaracter(codCaracter, clave){
    let posicion;
    let tipoCaracter = validarTipo(codCaracter);
    let cantCaracter;

    //rango de los caracteres
    if(tipoCaracter===0){
        return codCaracter;
    }

    //rango de los números
    if(tipoCaracter === 48){
        cantCaracter = 10; 
    }
    //rango de las mayusculas y minusculas 
    if(tipoCaracter === 65 || tipoCaracter === 97){
        cantCaracter = 26;
    }
    //hallar la nueva posición
    posicion = (codCaracter - tipoCaracter + clave)%cantCaracter; 
    if(posicion<0){
        posicion=cantCaracter+posicion
    }
    return(posicion + tipoCaracter);
}

function validarTipo(codCaracter){
    let tipoCaracter;

    if(codCaracter>=48 && codCaracter<=57){
        return tipoCaracter = 48; //número
    }
    if(codCaracter>=65 && codCaracter<=90){
        return tipoCaracter = 65; //mayúscula
    }
    if(codCaracter>=97 && codCaracter<=122){
        return tipoCaracter = 97; //minúscula
    }
    return tipoCaracter = 0;
}

export{encriptar, desencriptar};