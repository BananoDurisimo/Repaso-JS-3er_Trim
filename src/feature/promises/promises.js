let cadena = document.getElementById("cadena");
let btn = document.getElementById("btnTuki");

function validar() {
    return new Promise((resolve, reject) => {

        let valor = cadena.value.trim();

        if (valor.length === 0) {
            reject("No hay nada escrito");
            return;
        }

        let ultimoCaracter = valor[valor.length - 1].toLowerCase();

        if (
            ultimoCaracter == "a" ||
            ultimoCaracter == "e" ||
            ultimoCaracter == "i" ||
            ultimoCaracter == "o" ||
            ultimoCaracter == "u"
        ) {
            resolve(`El último carácter es una vocal: ${ultimoCaracter}`);
        } else {
            reject(`El último carácter es una consonante: ${ultimoCaracter}`);
        }
    });
}

btn.addEventListener("click", () => {
    validar()
        .then(mensaje => alert(mensaje))
        .catch(error => alert(error));
});