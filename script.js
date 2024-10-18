// JSON inicial con 3 usuarios estáticos
let usuarios = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        cedula: "1001001001",
        email: "juan.perez@mail.com",
        telefono: "3001234567",
        direccion: "Calle 123",
        ciudad: "Bogotá",
        pais: "Colombia"
    },
    {
        nombre: "María",
        apellido: "González",
        cedula: "2002002002",
        email: "maria.gonzalez@mail.com",
        telefono: "3109876543",
        direccion: "Carrera 45",
        ciudad: "Medellín",
        pais: "Colombia"
    },
    {
        nombre: "Carlos",
        apellido: "Rodríguez",
        cedula: "3003003003",
        email: "carlos.rodriguez@mail.com",
        telefono: "3207654321",
        direccion: "Avenida 30",
        ciudad: "Cali",
        pais: "Colombia"
    }
];

// Función para validar si la cédula ya existe
function cedulaExiste(cedula) {
    return usuarios.some(usuario => usuario.cedula === cedula);
}

// Manejo del formulario de registro
document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();

    let nuevoUsuario = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        cedula: document.getElementById('cedula').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        direccion: document.getElementById('direccion').value,
        ciudad: document.getElementById('ciudad').value,
        pais: document.getElementById('pais').value
    };

    // Validaciones
    if (!/^\d+$/.test(nuevoUsuario.cedula)) {
        alert('La cédula solo debe contener números');
        return;
    }
    
    if (cedulaExiste(nuevoUsuario.cedula)) {
        alert('La cédula ya existe');
        return;
    }

    usuarios.push(nuevoUsuario);
    alert('Usuario registrado exitosamente');
    listarUsuarios();  // Refresca la tabla
});

// Función para listar usuarios
document.getElementById('listarUsuarios').addEventListener('click', listarUsuarios);

function listarUsuarios() {
    let tabla = document.querySelector('#tablaUsuariosRegistrados tbody');
    tabla.innerHTML = '';  // Limpiar tabla

    usuarios.forEach(usuario => {
        let fila = `<tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.cedula}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.direccion}</td>
            <td>${usuario.ciudad}</td>
            <td>${usuario.pais}</td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}
