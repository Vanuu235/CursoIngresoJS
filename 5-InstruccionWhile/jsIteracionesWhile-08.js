/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;//porque si se multiplica por 0 no da nada, ademas tiene que ser positivo para mantener el negativo
	respuesta=true;

	while(respuesta==true)
	{
		numero=prompt("Por favor, ingrese un número");
		numero=parseInt(numero);
		while(numero==0)
		{
			numero=prompt("Error, ingrese un número");
			numero=parseInt(numero);
		}

			if(numero>0)
			{
				sumaPositivos=sumaPositivos+numero;
			}
			else
			{
				multiplicacionNegativos=multiplicacionNegativos*numero;
			}

		respuesta=confirm("¿Quiere seguir ingresando números?");//para que salga el cartel "aceptar"
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}