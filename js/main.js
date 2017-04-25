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
	var miEmail= document.getElementById('inputEmail').value;
	var miContra= document.getElementById('inputPassword').value;
	alert("El correo es: "+miEmail+ " & La contraseña es: " +miContra);
}

/*<p id="mostrarCorreo">El correo electrónico ingresado es:</p>
          <p id="mostrarClave">La clave ingresada es:</p>*/