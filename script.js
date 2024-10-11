document.getElementById('buttonFetch').addEventListener('click', function (event) {
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
document.getElementById('buttonAjax').addEventListener('click', function (event) {
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

    // Llamada AJAX
    $.ajax({
        type: 'POST',
        url: 'conexion.php',
        data: JSON.stringify(data),
        contentType: 'application/json',
        dataType: 'text',
        success: function (response) {
            console.log('Success :D', response);
            alert('Datos enviados con AJAX');
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
            alert('Error al enviar los datos con AJAX');
        }
    });
});

//Eliminar con AJAX
document.getElementById('btn-eliminar-ajax').addEventListener('click', function (event) {
    event.preventDefault();

    //Obtener el ID del registro a eliminar
    const idEliminar = document.getElementById('id-eliminar').value;

    $.ajax({
        type: 'DELETE',
        url: 'eliminar.php',
        data: { id: idEliminar },
        success: function (response) {
            console.log('Registro agregado correctamente :D', response);
            alert('Registro ELIMINADO con Exito');
        },
        error: function (xhr, status, error) {
            console.error('Error al eliminar el registro:', error);
            alert('Error al eliminar el registro');
        }
    });
});



