let editIndex = null;

// ===============================
// VALIDAR FORMULARIO
// ===============================
const validateForm = () => {
  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("nombre").value.trim();
  const doc = document.getElementById("documento").value.trim();

  if (email === "" || name === "" || doc === "") {
    alert("Complete todos los campos");
    return false;
  }

  if (!email.includes("@")) {
    alert("Correo inválido");
    return false;
  }

  const listData = JSON.parse(localStorage.getItem("listData")) || [];

  if (editIndex === null) {
    const emailExist = listData.some(e => e.email === email);
    const docExist = listData.some(e => e.doc === doc);

    if (emailExist || docExist) {
      alert("Email o documento ya registrado");
      return false;
    }
  }

  return true;
};

// ===============================
// MOSTRAR DATOS
// ===============================
const showData = () => {
  const listData = JSON.parse(localStorage.getItem("listData")) || [];
  let html = "";

  listData.forEach((e, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${e.email}</td>
        <td>${e.name}</td>
        <td>${e.doc}</td>
        <td>
          <button class="btn btn-warning" onclick="editData(${index})">
            Editar
          </button>
        </td>
        <td>
          <button class="btn btn-danger" onclick="deleteData(${index})">
            Eliminar
          </button>
        </td>
      </tr>
    `;
  });

  document.querySelector("#tableData tbody").innerHTML = html;
};

// ===============================
// AGREGAR / EDITAR
// ===============================
const addData = () => {
  if (!validateForm()) return;

  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("nombre").value.trim();
  const doc = document.getElementById("documento").value.trim();

  const listData = JSON.parse(localStorage.getItem("listData")) || [];

  if (editIndex === null) {
    listData.push({ email, name, doc });
  } else {
    listData[editIndex] = { email, name, doc };
    editIndex = null;
  }

  localStorage.setItem("listData", JSON.stringify(listData));
  clearForm();
  showData();
};

// ===============================
// EDITAR
// ===============================
const editData = (index) => {
  const listData = JSON.parse(localStorage.getItem("listData")) || [];
  const data = listData[index];

  document.getElementById("email").value = data.email;
  document.getElementById("nombre").value = data.name;
  document.getElementById("documento").value = data.doc;

  editIndex = index;
};

// ===============================
// ELIMINAR
// ===============================
const deleteData = (index) => {
  if (!confirm("¿Estás seguro de eliminar?")) return;

  const listData = JSON.parse(localStorage.getItem("listData")) || [];
  listData.splice(index, 1);
  localStorage.setItem("listData", JSON.stringify(listData));
  showData();
};

// ===============================
// LIMPIAR FORMULARIO
// ===============================
const clearForm = () => {
  document.getElementById("email").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("documento").value = "";
};

// ===============================
// CARGAR DATOS AL INICIAR
// ===============================
window.onload = showData;





