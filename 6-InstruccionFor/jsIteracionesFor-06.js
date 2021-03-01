function mostrar()
{
	var i;
	var numeroIngresado;
	var contadorPar;

	contadorPar=0;
	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(i=0; i<numeroIngresado; i++)
	{
		
		if(numeroIngresado%2==0)
		{
			contadorPar++;
			document.write(i+"<br>");
		
		}
	}
	
	document.write("se ingresaron" + contadorPar + " pares.");
	
	
/*al presionar el botón pedir un número. mostrar los numeros
 pares desde el 1 al número ingresado, y mostrar la cantidad 
 de numeros pares encontrados.*/

}