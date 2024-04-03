/* 143. Formulario de Registro: 
Diseña un formulario de registro en HTML con campos como nombre, correo electrónico y 
contraseña. Utiliza JavaScript para validar los campos y mostrar mensajes de error. Aplica 
estilos CSS para resaltar los campos incorrectos
Características de la contraseña:
al menos una letra minúscula.
al menos una letra mayúscula.
al menos un número.
al menos un carácter especial.
longitud de cadena entre 8 y 16 caracteres.
ejemplos de contraseñas:
Contrasena1!
H0l4Mundo
Mic0ntr4seña**#**
P4ssw0rd$
ContrasenaSegura123
MiClave#2023
Un4PerroL4dra
 */

//selecciono elementos del DOM
const nombre = document.getElementById('nombre');
const correoElectronico = document.getElementById('correo-electrónico');
const contrasena = document.getElementById('contrasena');
const btnEnviar = document.getElementById('btnEnviar');
const contenedorModal = document.getElementById('modal-contenedor');
const tituloModal = document.getElementById('tituloModal');
const txtModal = document.getElementById('txtModal');
const btnCerrarModal = document.getElementById('cerrar-modal');

//expresión regular para validar un correo
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//expresión regular para validar contraseña
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

btnEnviar.addEventListener('click', (e) => {
    //prevenir comportamiento por defecto 
    e.preventDefault();
    //contador para controlar los errores
    let contadorDeErrores = 0;
    //validar nombre
    if (!isNaN(nombre.value) || nombre.value == '') {
        nombre.style.border = 'red solid';
        contadorDeErrores++;
    } else {
        nombre.style.border = 'none';
    }
    //validar correo
    if (!regexEmail.test(correoElectronico.value) || correoElectronico.value == '') {
        correoElectronico.style.border = 'red solid';
        contadorDeErrores++;
    } else {
        correoElectronico.style.border = 'none';
    }
    //validar contraseña
    if (!regexPassword.test(contrasena.value) || contrasena.value == '') {
        contrasena.style.border = 'red solid';
        contadorDeErrores++;
    } else {
        contrasena.style.border = 'none';
    }
    //si el contador es mayor a cero indica errores si no esta todo correcto.
    if (contadorDeErrores > 0) {
        tituloModal.style.color = 'red';
        contenedorModal.style.display = 'block';
        contenedorModal.style.zIndex = '100';
    } else {
        correoElectronico.style.border = 'none';
        contrasena.style.border = 'none';
        window.open('http://127.0.0.1:5500/Ejercicio143/registro.html')
    }
})

btnCerrarModal.addEventListener('click', (e) => {
    contenedorModal.style.display = 'none';
    contenedorModal.style.zIndex = '-1';

})

