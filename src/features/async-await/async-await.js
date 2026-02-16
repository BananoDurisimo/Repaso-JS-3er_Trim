// * Crear una función asíncrona que reciba un número y retorne el doble del número después de 2 segundos. Utilizar async/await para manejar la promesa

let p = document.getElementById("textoCambio")
let btn = document.getElementById("btnNumber")

function numero(){

    let numero = Number(document.getElementById("numero").value)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`El numero es: ${numero}, el doble es: ${(numero*2)}`)
        }, 2000);
    })
}

async function mostrarNumero() {
    let mensaje = await numero()
    p.textContent = (mensaje)
}

