//establecer conexión
var socket = io();

var serchParams = new URLSearchParams(window.location.search);

if(!serchParams.has('escritorio')){
	window.location = 'index.html';
	throw new Error('El escritorio es necesario');
}

var escritorio = serchParams.get('escritorio');
//var label = $('small');

console.log(escritorio);
$('h1').text('Escritorio '+ escritorio);

$('button').on('click', function(){
	socket.emit('atenderTicket', {escritorio: escritorio}, function(resp){
		//console.log(resp);
		if(resp === 'No hay más tickets'){
			$('small').text(resp);
			alert(resp);
			return;
		}
		$('small').text('Ticket' + resp.numero);
	});
});