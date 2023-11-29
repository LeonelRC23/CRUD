import Contacto from "./classContacto.js";

//variables globales
// const contactoNuevo = new Contacto(1, "algun nombre", "apellido", "sadsad@gsdsdf.com", 4528039);
const agenda = [];
const formularioContacto = document.querySelector(`form`);
const nombre = document.querySelector(`#nombre`),
apellido = document.querySelector(`#apellido`),
email = document.querySelector(`#email`),
telefono = document.querySelector(`#telefono`);



//funciones
const crearContacto = (e) => {
    e.preventDefault();
    console.log(`Desde la funcion crear contacto`);
    //validar datos
    //crear el objeto con los datos del formulario
    const contactoNuevo = new Contacto(1, nombre.value, apellido.value, email.value, telefono.value);
    //guardar el objeto en un array agenda
    agenda.push(contactoNuevo);
    guardarEnLocalStorage();
    console.log(agenda);
};

const guardarEnLocalStorage = () => {
    localStorage.setItem(`agendaKey`, JSON.stringify(agenda));
}

//logica
formularioContacto.addEventListener(`submit`, crearContacto);
