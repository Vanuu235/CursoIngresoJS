
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	ancho = prompt("Por favor ingrese ancho del rectángulo: " + " Ejemplo: 3 ");
	largo = prompt("Por favor ingrese largo del rectángulo: " + " Ejemplo: 7 ");

	ancho =parseInt(ancho);
	largo = parseInt(largo);

	perimetro = ancho * 2 + largo *2;

	alert ("El perímetro del rectángulo es de: " + perimetro + " metros.");
}
