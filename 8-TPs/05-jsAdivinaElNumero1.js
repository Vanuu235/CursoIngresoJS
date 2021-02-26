/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroRandom;
var mensaje;
var positivo;

contadorIntentos=0;

function comenzar()
{
	numeroRandom = Math.floor(Math.random() * 100) + 1;
}

function verificar()
{
	numeroSecreto=txtIdNumero.value;
	numeroSecreto=parseInt(numeroSecreto);
	contadorIntentos++;
	positivo=numeroSecreto>numeroRandom;
	switch(positivo)
	{
		case true:
			mensaje="Se paso, Sobran " + (numeroSecreto-numeroRandom);
		break;

		case false:
			if(numeroRandom-numeroSecreto)
				{
					mensaje="Casi, Faltan " + (numeroRandom-numeroSecreto);
				}
			else
			{
				mensaje="Usted es un ganador!!! y en solo " + contadorIntentos + " intentos";
			}
		break;		
	}
	alert(mensaje);
	txtIdIntentos.value=contadorIntentos;
}

