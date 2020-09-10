var socket = io();
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'JLGarcía',
    mensaje: 'Hola Mundo!!!'
}, function(resp) {
    console.log('respuesta server (callback): ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});