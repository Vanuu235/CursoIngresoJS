/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;

//entradas
	importe = txtIdImporte.value;
	importe = parseInt(importe);

//procesos
	resultado = txtIdResultado.value;
	descuento = importe * 25/100;
	resultado = importe - descuento;

	/* Formas para sacar el procentaje:
	1) descuento = importe * 25/100;
	2) descuento = importe * 0.25;
En estos primeros se puede mostrar individualmente el dto;
	3) descuento = importe * 0.75;
	4) descuento = importe (importe * 0.25);
	*/

//salidas
	txtIdResultado.value = resultado;
}
/*txtIdImporte
txtIdResultado*/