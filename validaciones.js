function validarFormulario() {
    // Limpiar mensajes de error
    var errores = document.querySelectorAll('.error');
    errores.forEach(function (error) {
        error.textContent = '';
    });

    var nombre = document.getElementById('nombre').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var email = document.getElementById('email').value.trim();
    var validacionExitosa = true; // Variable para controlar el estado de las validaciones

    // Validar nombre
    if (nombre === '') {
        document.getElementById('error-nombre').textContent = 'Por favor ingresa tu nombre.';
        validacionExitosa = false;
    }

    // Validar teléfono
    if (telefono === '') {
        document.getElementById('error-telefono').textContent = 'Por favor ingresa tu número de teléfono/celular.';
        validacionExitosa = false;
    } else if (!/^\+?\d{2,3}\s?\d{4}\s?\d{4}$/.test(telefono)) {
        document.getElementById('error-telefono').textContent = 'Por favor ingresa un número de teléfono/celular válido.';
        validacionExitosa = false;
    }

    // Validar correo electrónico
    if (email === '') {
        document.getElementById('error-email').textContent = 'Por favor ingresa tu correo electrónico.';
        validacionExitosa = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('error-email').textContent = 'Por favor ingresa un correo electrónico válido.';
        validacionExitosa = false;
    }

    // Si todas las validaciones son exitosas, se puede enviar el formulario
    if (validacionExitosa) {
        document.getElementById('formulario-contacto').submit();
    }
}