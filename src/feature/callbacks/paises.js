let bD1=["Canada", "EUA", "Mexico","Ecuador", "Brazil", "Argentina", "Uruguay"]

let bD2=["Japón", "Irán", "Corea del Sur", "Alemania", "Croacia", "España", "Inglaterra"]

document.addEventListener("DOMContentLoaded", () => {
    mostrarPais();
});

const mostrarPais = () => {




    let paisData = document.getElementById("paises1")
    paisData.innerHTML = ""
    bD1.forEach(item => {
    paisData.innerHTML += `<li class="m-3">${item}</li>`
    })


    let paisData2 = document.getElementById("paises2")
    paisData2.innerHTML = ""
    bD2.forEach(item => {
    paisData2.innerHTML += `<li class="m-3">${item}</li>`
    })
};

const validarPais = () => {
    const pais = document.getElementById("pais").value.trim();

    if (pais === "") {
    alert("Complete el campo");
    return false;
    }

    return true;
};


function consultarPais1(callback) {
    if (!validarPais()) return;

    const pais = document.getElementById("pais").value.trim();

    if (bD1.includes(pais)) {
    alert("País encontrado en BD1 ");
    } else {
    callback(pais);
    }
}

function consultarPais2(pais) {
    if (bD2.includes(pais)) {
    alert("País encontrado en BD2 ");
    } else {
    alert("País no encontrado en ninguna BD ");
    }
}

document.getElementById("btnPais").addEventListener("click", () => {
    consultarPais1(consultarPais2);
});