//funcion que valida el formulario de contacto
function validarContacto() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var expresion = /\w+@\w+\.+[a-z]/;
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (!expresion.test(email)) {
        alert("El email no es valido");
        return false;
    } else {
        alert("Mensaje enviado");
        return true;
    }
}