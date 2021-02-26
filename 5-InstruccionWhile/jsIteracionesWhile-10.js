/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var ceros;
	var pares;
	var promPositivos;
	var promNegativos;

	respuesta="si";
	sumaPositivos=0;
	sumaNegativos=0;
	contadorPositivos=0;
	contadorNegativos=0;
	ceros=0;
	pares=0;

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;//sumaPositivos+= numeroIngresado
			contadorPositivos++;
		}

		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos=sumaNegativos+numeroIngresado;
				contadorNegativos++;
			}
			else
			{
				ceros++;
			}
		}
		
		if(numeroIngresado%2==0)
		{
			pares++;
		}

		respuesta=prompt("desea continuar?: si/no");
	}
	promPositivos=sumaPositivos/contadorPositivos;
	promNegativos=sumaNegativos/contadorNegativos;

	document.write("la suma de negativos es :"+ sumaNegativos + "<br>"); // salto de linea puede ser \n
	document.write("La suma de los positivos es: " + sumaPositivos+"<br>");
	document.write("La cantidad de negativos es: "+ contadorNegativos +"<br>");
	document.write("La cantidad de positivos es: "+ contadorPositivos +"<br>");
	document.write("La cantidad de ceros es: "+ ceros +"<br>");
	document.write("La cantidad de pares es: "+ pares +"<br>");
	document.write("El promedio de los positivos es: "+ promNegativos +"<br>");
	document.write("El promedio de los negativos es: "+ promPositivos +"<br>");

	}

