console.log(window.location.search);

const parametroURL = new URLSearchParams(window.location.search);
const idContacto = parametroURL.get("id");
const formulario = document.querySelector(`#formDetallesContacto`);
const botonGuardarCambios = document.getElementById("btnGuardarCambios");
// const nombreDetalleContacto = document.querySelector(`#nombre`),
//   apellidoDetalleContacto = document.querySelector(`#apellido`),
//   emailDetalleContacto = document.querySelector(`#email`),
//   telefonoDetalleContacto = document.querySelector(`#telefono`);

function guardarDetallesEnLocalStorage(){
    localStorage.setItem(`agendaKey`, JSON.stringify(agendaDetalles));
}

function subirCambios(event){
    event.preventDefault();
}

console.log(idContacto);

//buscar del localStorage
const agendaDetalles = JSON.parse(localStorage.getItem(`agendaKey`)) || [];
console.log(agendaDetalles);

//buscar dentro del array el contacto que tiene el idContacto. find()
const objetoEncontrado = agendaDetalles.find(
  (agendaDetalles) => agendaDetalles.id === idContacto
);
console.log(objetoEncontrado);

//usando el DOM cargo los datos del objeto encontrado
formulario.elements["nombre"].value = objetoEncontrado.nombre;
formulario.elements["apellido"].value = objetoEncontrado.apellido;
formulario.elements["email"].value = objetoEncontrado.email;
formulario.elements["telefono"].value = objetoEncontrado.telefono;
console.log(formulario.elements["nombre"].value);
console.log(formulario.elements["apellido"].value);
console.log(formulario.elements["email"].value);
console.log(formulario.elements["telefono"].value);

//los datos aparecen cargados pero no puedo guardarlos en el localStorage
// console.log(formulario.elements["email"].value);

//Corregir, no habia que actualizar datos
