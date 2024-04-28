function obtenerSemilla() {
    let semilla = parseInt(prompt("Ingrese la semilla"));
    return semilla;
}
 
function calcularSecuencia(semilla) {
    let secuencia = new Array(); 
    secuencia.push(semilla); 
    while (semilla !== 1) { // se verifica si la semilla es par o impar
        if (semilla % 2 === 0) { // si es par, se divide por 2
        semilla = semilla / 2;
    } else {
        semilla = semilla * 3 + 1; // si es impar, se multiplica por 3 y se le suma 1
    }
    secuencia.push(semilla); // agrega el nuevo valor a la secuencia 
    }
    return secuencia;
}
    
function main() {
    const semilla = obtenerSemilla();
    const secuencia = calcularSecuencia(semilla);
    document.getElementById("largo").innerText= secuencia.length; // innerText obtiene y muestra el contenido del id

    let maximo = secuencia[0]; // se considera el primer elemento de la secuencia como el máximo inicial
    for (let i = 1; i < secuencia.length; i++) {
        if (secuencia[i] > maximo) {
            maximo = secuencia[i]; // se actualiza el máximo si se encuentra un número mayor
        }
    }
    document.getElementById("maximo").innerText = maximo;
}

