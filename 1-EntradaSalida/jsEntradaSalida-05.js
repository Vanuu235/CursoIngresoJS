/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var elNombre;

	var laEdad;

	elNombre = document.getElementById('txtIdNombre').value;

	laEdad = document.getElementById('txtIdEdad').value;

	alert ("Usted se llama " + elNombre + " y tiene " + laEdad + " años");
}
/* Ejercicio 5 bis, se agrega el prompt pidiendo apellido y se contatena
function mostrar()
{	
	var elNombre;

	var laEdad;

	var apellido;

	apellido = prompt ("Ingrese su apellido");

	elNombre = document.getElementById('txtIdNombre').value;

	laEdad = document.getElementById('txtIdEdad').value;

	alert ("Usted se llama " + elNombre + " " + apellido + " y tiene " + laEdad + " años");
}
*/
