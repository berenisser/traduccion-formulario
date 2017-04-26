function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electronico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";
}

translate();

function imprimir(){
	var miEmail= document.getElementById('mostrarCorreo');
	var miContra= document.getElementById('mostrarContra');
	
	miEmail.innerHTML = "Email: "+document.getElementById("inputEmail").value;
	miContra.innerHTML = "Contraseña: "+document.getElementById("inputPassword").value;
}
