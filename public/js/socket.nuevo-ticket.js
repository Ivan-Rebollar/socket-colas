
//comando para levantar la comunicación
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect',(cliente) => {
	console.log('Usuario conectado al servidor');
});

socket.on('disconnect',() => {
		console.log('Usuario desconectado');
});

//función pendiente de los eventos jquery 
//on 'estadoActual'
socket.on('estadoActual', function(resp){
	label.text(resp.actual);
	console.log(resp);
});

$('button').on('click', function(){
	socket.emit('siguienteTicket',null,function(siguienteTicket){
		label.text(siguienteTicket);
	});
});