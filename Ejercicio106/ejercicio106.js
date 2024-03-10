/*106. Define una función llamada `contarVocales` que tome un objeto con propiedades 
`texto` y cuente cuántas vocales (a, e, i, o, u) hay en el texto
 */
const objeto = {
    texto: 'El murciélago negro como la noche voló hacia la oscuridad '
}

const contarVocales = (objeto) => {
    let contador = 0;
    //comprobar el objeto y que tenga texto
    if (!objeto || !objeto.texto || !objeto.texto.length || typeof objeto.texto !== 'string') {
        return "No se encontró texto";
    }

    const letras = objeto.texto.toLowerCase().replace(/\s/g, "").split('');
    const letrasSinAcento = letras.map((letra) => letra.normalize("NFD").replace(/[\u0300-\u036F]/g, ""));
    //console.log(letrasSinAcento);
    for (let i = 0; i < letrasSinAcento.length; i++) {
        if (letrasSinAcento[i] === 'a' || letrasSinAcento[i] === 'e' || letrasSinAcento[i] === 'i' || letrasSinAcento[i] === 'o' || letrasSinAcento[i] === 'u') {
            contador++;
        }
    }
    return contador > 0 ? contador : 'No hay vocales en el texto!'
}


console.log(contarVocales(objeto));
