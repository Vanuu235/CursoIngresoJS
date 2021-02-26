/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	contador=0;
	acumulador=0;
	respuesta=true;

	do
	{
		numero=prompt("Por favor, ingrese un número");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador= contador+1;
		respuesta=prompt("¿Quiere seguir ingresando números? si/no");
	}while(respuesta == 'si');

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

/*	while(respuesta==true)
	{
		numero=prompt("Por favor, ingrese un número");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador= contador+1;
		respuesta=confirm("¿Quiere seguir ingresando números?");
	}
*/
}