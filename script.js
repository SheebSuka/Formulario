document.getElementById('buttonFetch').addEventListener('click', function (event) {  //<-- SUBIR DATOS
    event.preventDefault();

    // Se capturan datos.
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value;

    // Se crea un objeto para los datos del formulario
    const data = {
        name: name,
        lastName: lastName,
        gender: gender,
        date: date
    };

    console.log("Datos capturados:", name, lastName, gender, date);

    // Llamada Fetch
    fetch('conexion.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Convertir el objeto a JSON
    })
        .then(response => response.text())
        .then(data => {
            console.log('Success :D', data);
            alert('Datos enviados con FETCH');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al enviar los datos con FETCH');
        });
});

// Función para enviar datos con AJAX
document.getElementById('buttonAjax').addEventListener('click', function (event) { //<-- SUBIR DATOS
    event.preventDefault();

    // Se capturan datos.
    const name = document.getElementById('name').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const date = document.getElementById('date').value.trim();

    // Validaciones
    if (name === '') {
        alert('El campo "Nombre" no puede estar vacío');
        return;
    }
    if (lastName === '') {
        alert('El campo "Apellido" no puede estar vacío');
        return;
    }
    if (gender === '') {
        alert('El campo "Género" no puede estar vacío');
        return;
    }
    if (date === '') {
        alert('El campo "Fecha" no puede estar vacío');
        return;
    }

    // Se crea un objeto para los datos del formulario
    const data = {
        name: name,
        lastName: lastName,
        gender: gender,
        date: date
    };

    console.log("Datos capturados:", name, lastName, gender, date);

    // Llamada AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'conexion.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Success :D', xhr.responseText);
            alert('Datos enviados con AJAX');
        } else {
            console.error('Error:', xhr.statusText);
            alert('Error al enviar los datos con AJAX');
        }
    };
    xhr.send(JSON.stringify(data));
});

//Eliminar con PHP y JS
document.getElementById('btn-eliminar-ajax').addEventListener('click', function (event) {
    event.preventDefault();

    const id = document.getElementById('id-eliminar').value.trim();

    // Validación
    if (id === '') {
        alert('Ingrese un ID válido');
        return;
    }

    // Llamada AJAX para eliminar
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'conexion.php?id=' + id, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Registro eliminado correctamente');
            alert('Registro eliminado correctamente');
        } else {
            console.error('Error:', xhr.statusText);
            alert('Error al eliminar registro');
        }
    };
    xhr.send();
});





