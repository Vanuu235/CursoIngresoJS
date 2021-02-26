/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var centígrados;
	var Fahrenheit;

	temperatura = txtIdTemperatura.value;
	temperatura = parseInt(temperatura);
	centígrados = (temperatura - 32)*5/9;
	centígrados = centígrados.toFixed(2);

	alert(temperatura + " Fahrenheit equivalen a: " + centígrados + " centígrados");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var centígrados;
	var fahrenheit;

	temperatura = txtIdTemperatura.value;
	temperatura = parseInt(temperatura);
	fahrenheit = (temperatura * 9/5) + 32;

	alert(temperatura + " Centígrados equivalen a: " + fahrenheit + "Fahrenheit");
}
/* txtIdTemperatura */ 