//Author : STEPHANO FRANCHEZCO BELTRAN VALER
//Funcion para encriptar
function encriptar(){
    let texto = document.getElementById('text-entrada').value;
    let mensaje = document.getElementById('Mensaje-texto');
    let sub_mensaje = document.getElementById('sub-mensaje-texto');
    let imagen = document.getElementById('Imagen-creeper');
    //Validacion de texto
    const validaTexto = /[A-ZÁÉÍÓÚáéíóú]/.test(texto);

    if(validaTexto==true){
        alert("Ingrese unicamente un texto sin mayúsculas ni acentos");
        return;
    }
    //Encriptacion
    let texto_encriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi , "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");


    if(texto.length !== 0){
        document.getElementById("text-entrada").value = "";
        document.getElementById("mensaje-encriptado").textContent = texto_encriptado;
        mensaje.textContent = "¡¡¡Texto encriptado correctamente!!!";
        sub_mensaje.textContent = " ";
        imagen.style.display = "none";
    }

    else{
        document.getElementById("text-entrada").value = "";
        document.getElementById("mensaje-encriptado").textContent = "";
        mensaje.textContent = "No se encontró ningún mensaje";
        sub_mensaje.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        alert("Por favor ingrese un texto para encriptar");
    }
  
}

//Funcion para desencriptar
function desencriptar(){
    let texto = document.getElementById('mensaje-encriptado').textContent;
    let mensaje = document.getElementById('Mensaje-texto');
    let sub_mensaje = document.getElementById('sub-mensaje-texto');
    let imagen = document.getElementById('Imagen-creeper');

    let texto_desencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length !== 0){
        document.getElementById("mensaje-encriptado").textContent = texto_desencriptado;
        mensaje.textContent = "¡¡¡Texto desencriptado correctamente!!!";
        sub_mensaje.textContent = " ";
        imagen.style.display = "none";
    }else{
        mensaje.textContent = "No se encontró ningún mensaje";
        sub_mensaje.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        alert("Por favor ingrese un texto para desecriptar");
    }

}

function copiar_text(){
    let mensaje_encriptado = document.getElementById('mensaje-encriptado').textContent;
    navigator.clipboard.writeText(mensaje_encriptado).then(function(){
        alert("Texto copiado al portapapeles");
    })
    .catch (function(err){
        console.error('Error al copiar el texto: ', err);
});

}



