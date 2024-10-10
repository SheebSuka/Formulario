document.getElementById('user').addEventListener('submit', function (event) {
    event.preventDefault();

    //Se capturan datos.
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value;

    //Se crea un objeto para los datos del formulario
    const data = {
        name: name,
        lastName: lastName,
        gender: gender,
        date: date
    };

    console.log("Datos capturados:", name, lastName, gender, date);

    //Solicituda para conexion Pe ashe pe
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
            alert('Datos enviados correctamente');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al enviar los datos');
        });

});