
function mostrarRegistro() {
	document.getElementById('inicio').style.display = "none";
	document.getElementById('registro').style.display = "flex";
}
function mostrarInicio() {
	document.getElementById('inicio').style.display = "flex";
	document.getElementById('registro').style.display = "none";
}


function ajax(config, callback){
	var method = config[0].method;
	var params = Object.entries(config[1]);
	var formatedParams = "";

	for(var [key, value] of params){
		formatedParams += key + "=" + value + "&";

	}
	formatedParams = formatedParams.substring(0, formatedParams.length-1);

	var	petition = new XMLHttpRequest();

	petition.onreadystatechange = function (){

		if (petition.readyState == 4 && petition.status == 200) {
			callback(petition.responseText);
		}
	}
	switch(method){
		case "GET":
			petition.open("GET", URL + config[0].path + "?" + formatedParams);
			petition.send();
			break;
		case "POST":
			petition.open("POST", URL + config[0].path);
			petition.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			petition.send(formatedParams);
			break;
		default:
			console.log("Método no reconocido");
			break;
	}
}
function registro(){
		var correo = "robert-art1@hotmail.com"; //AQUI VA EL INNER
		var password = "123";

		var config = [{
		method: "POST",
		isFormData: false,
		path: "registro.php",
		
	},{
		correoElectronico: correo, 
		password: password
	}];
	ajax(config,callbackRegistro);
	}

	function callbackRegistro(response){
		console.log(response);
	}