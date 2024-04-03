/* 144. Validación de Correo Electrónico en Tiempo Real: 
Crea un campo de entrada de correo electrónico en HTML y utiliza JavaScript para validar 
el formato del correo electrónico en tiempo real a medida que el usuario escribe. Muestra 
un mensaje de error si el formato es incorrecto 
 */
//Importante : no responde a la consigna!!!
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let correoAValidar = '';
const correo = document.getElementById('correo');
const btnValidar = document.getElementById('btnValidar');
btnValidar.addEventListener('click', (e) => {
    correoAValidar = correo.value;
    if (regexEmail.test(correoAValidar)) {
        swal({
            title: "Buen Trabajo!!!",
            text: "Usted ingreso un correo valido",
            icon: "success",
            button: "OK",
        });
    } else {
        const error = EspecificarError(correoAValidar);
        swal({
            title: "Algo salio mal!!!",
            text: `${error}`,
            icon: "error",
            button: "OK",
        });
    }
})


function EspecificarError(email) {
    if (!email.includes("@")) {
        return "Falta el símbolo arroba (@)";
    }

    const parts = email.split("@");
    if (parts.length !== 2) {
        return "Formato de correo electrónico no válido";
    }

    const localPart = parts[0];
    const domainPart = parts[1];

    if (!localPart || localPart.length === 0) {
        return "Falta la parte local del correo electrónico";
    }

    if (!domainPart || domainPart.length === 0) {
        return "Falta el nombre de dominio";
    }

    if (!/[a-zA-Z0-9-.]/.test(localPart)) {
        return "La parte local del correo electrónico contiene caracteres no válidos";
    }

    if (!/[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}/.test(domainPart)) {
        return "El nombre de dominio no es válido";
    }

    return "Correo electrónico no válido";
}