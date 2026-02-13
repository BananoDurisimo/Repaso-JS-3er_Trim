const person = {
    name: 'Juan Carlos Valencia',
    age: 30,
    city: 'Cali',
    profession: 'Desarrollador'
};

// Destructuring
const { name, age, profession } = person;

// Seleccionar el contenedor
const resultado = document.getElementById("resultado");

// Insertar contenido en el HTML
resultado.innerHTML = `
    <h5>Resultado del Destructuring</h5>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Edad:</strong> ${age}</p>
    <p><strong>Profesión:</strong> ${profession}</p>
`;