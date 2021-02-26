/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado=parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)||(numeroIngresado<0||numeroIngresado>9) )
	{
		numeroIngresado = prompt("Numero no válido, reingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
	}
alert(numeroIngresado);
	
}//inNan() se usa para validar que lo ingresado sea SOLAMENTE NUMEROS