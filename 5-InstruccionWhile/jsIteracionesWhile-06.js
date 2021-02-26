function mostrar()
{
	var contador; // se incrementa en constante, valor fijo//variable de control
	var acumulador;// se incrementa en variables, funciona como suma
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while(contador < 5)
	{
		numeroIngresado=prompt("Por favor, ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador= contador+1; // tambien se puede usar como contador++
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN