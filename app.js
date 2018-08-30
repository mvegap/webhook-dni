const functions = require('firebase-functions');
const App = require('actions-on-google').DialogFlowApp;

exports.webhookDNI = functions.https.onRequest((request,response) => {

	let app = new App({request,response});

	function get_dni(app){

		let dni = parseInt(app.getArgument('txt_dni'));

		if(dni == '74684743'){
			app.tell('Bienvenido MIGUEL ANGEL VEGA PALOMINO');
		}else{
			app.tell('Ingresa otro DNI');
		}

	}

	const actionMap = new Map();
	actionMap.set('get_dni', get_dni);

	app.handleRequest(actionMap);

});