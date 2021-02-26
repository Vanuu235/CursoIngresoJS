/*Al presionar el botón pedir números hasta que el usuario quiera, 
mostrar el número máximo y el número mínimo ingresado.
 */
/*function mostrar()
{	//declaro variables
	var numeroIngresado;
	var maximo;
	var minimo;
	var respuesta;
	var banderaPrimer;

	banderaPrimer=true;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(banderaPrimer==true||numeroIngresado>maximo)
		{
		maximo=numeroIngresado;
		}
		if(banderaPrimer==true||numeroIngresado<minimo)
		{
			minimo=numeroIngresado;
		}
		banderaPrimer=false;

		respuesta=prompt("¿Desea seguir ingresando números? si/no.");
	}
	txtIdMaximo.value=maximo;
	txtIdMinimo.value=minimo;
}*/

/*9 BIS: Ingresar 10 números distintos de cero. Determinar de los 
pares el menor y de los negativos el mayor.*/ 
function mostrar()
{	
	var numIngresado;
	var par;
	var negativos;
	var maximo;
	var minimo;
	var i;

	i=0;
	banderaPar=true;
	banderaNegativos=true;

	while(i<10)
	{
		numIngresado=prompt("Por favor, ingrese un número");
		numIngresado=parseInt(numIngresado);
		i++;

		while(numIngresado==0)
		{
			numIngresado=prompt("Error.Por favor, ingrese un número");
			numIngresado=parseInt(numIngresado);
		}

		if(numIngresado<0)
		{
			if(banderaNegativos==true||numIngresado>maximo)
			{
				maximo=numIngresado;
				banderaNegativos=false;
					
			}	
		}
			
		if(numIngresado%2==0)
		{
			if(banderaPar==true||numIngresado>minimo)
			{
				minimo=numIngresado;
				banderaPar=false;
			}
		}	
		
	}
	document.write("El menor de los pares es: "+minimo+"<br>");
	document.write("El mayor de los negativos es: "+maximo);
}


			

			