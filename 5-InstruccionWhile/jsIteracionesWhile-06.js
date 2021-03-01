function mostrar()
{
	var contador; // se incrementa en constante, valor fijo//variable de control
	var acumulador;// se incrementa en variables, funciona como suma
	var numeroIngresado;

	contador=0;
	acumulador=0;


do
{
	numeroIngresado=prompt("ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	acumulador=acumulador+numeroIngresado;
	contador=contador+1;
	respuesta=prompt("Desea continuar?");

}while(respuesta=="si");
	promedio=acumulador/contador;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;

	
	/*while(contador < 5)
	{
		numeroIngresado=prompt("Por favor, ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador= contador+1; // tambien se puede usar como contador++
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;*/
}