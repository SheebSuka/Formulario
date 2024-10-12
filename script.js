document.addEventListener('DOMContentLoaded', function () {
    // Evento para enviar datos con Fetch
    document.getElementById('buttonFetch').addEventListener('click', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim(); //<-- Se utilza Trim para evitar falsos positivos
        const lastName = document.getElementById('lastName').value.trim();
        const gender = document.getElementById('gender').value.trim();
        const date = document.getElementById('date').value.trim();

        // Validaciones de los campos
        if (name === '') {
            alert('El campo "Name" no puede estar vacío');
            return;
        }
        if (lastName === '') {
            alert('El campo "Last Name" no puede estar vacío');
            return;
        }
        if (gender === '' || gender === 'Choose...') {
            alert('Seleccione un género válido');
            return;
        }
        if (date === '') {
            alert('El campo "Date" no puede estar vacío');
            return;
        }

        const data = {
            name: name,
            lastName: lastName,
            gender: gender,
            date: date
        };

        fetch('conexion.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                alert('Datos enviados con éxito');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al enviar los datos');
            });
    });

    // Evento para enviar datos con AJAX
    document.getElementById('buttonAjax').addEventListener('click', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const gender = document.getElementById('gender').value.trim();
        const date = document.getElementById('date').value.trim();

        // Validaciones de los campos
        if (name === '') {
            alert('El campo "Name" no puede estar vacío');
            return;
        }
        if (lastName === '') {
            alert('El campo "Last Name" no puede estar vacío');
            return;
        }
        if (gender === '' || gender === 'Choose...') {
            alert('Seleccione un género válido');
            return;
        }
        if (date === '') {
            alert('El campo "Date" no puede estar vacío');
            return;
        }

        const data = {
            name: name,
            lastName: lastName,
            gender: gender,
            date: date
        };

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'conexion.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log('Success:', xhr.responseText);
                alert('Datos enviados con AJAX');
            } else {
                console.error('Error:', xhr.statusText);
                alert('Error al enviar los datos con AJAX');
            }
        };
        xhr.send(JSON.stringify(data));
    });

    // Evento para eliminar datos con AJAX
    document.getElementById('btn-eliminar-ajax').addEventListener('click', function (event) {
        event.preventDefault();

        const id = document.getElementById('id-eliminar').value.trim();

        // Validación del campo ID
        if (id === '') {
            alert('Ingrese un ID válido para eliminar');
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `conexion.php?id=${id}`, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log('Registro eliminado:', xhr.responseText);
                alert('Registro eliminado con éxito');
            } else {
                console.error('Error:', xhr.statusText);
                alert('Error al eliminar el registro');
            }
        };
        xhr.send();
    });

    // Evento para eliminar datos con Fetch
    document.getElementById('btn-eliminar-php').addEventListener('click', function (event) {
        event.preventDefault();

        const id = document.getElementById('id-eliminar').value.trim();

        // Validación del campo ID
        if (id === '') {
            alert('Ingrese un ID válido para eliminar');
            return;
        }

        fetch(`conexion.php?id=${id}`, {
            method: 'DELETE'
        })
            .then(response => response.text())
            .then(data => {
                console.log('Registro eliminado:', data);
                alert('Registro eliminado con éxito');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al eliminar el registro');
            });
    });
});
