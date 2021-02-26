/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetro;
	var cantidadAlambre;

	largoTerreno = txtIdLargo.value;
	anchoTerreno = txtIdAncho.value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);

	perimetro = (largoTerreno + anchoTerreno) * 2;
	cantidadAlambre = perimetro *3;

	alert("La cantidad de alambre necesario es: " + cantidadAlambre + " metros.");

	

}
function Circulo () 
{
	var radio;
	var perimetro;
	var cantidadAlambre;

	radio = txtIdRadio.value;
	radio = parseInt(radio);

	perimetro = 2 * Math.PI * radio;
	cantidadAlambre = perimetro * 3;
	cantidadAlambre = cantidadAlambre.toFixed(2);

	alert("La cantidad de alambre necesario es: " + cantidadAlambre + " metros.");


}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var superficie;
	var cemento;
	var cal;

	
	/*1metroCuadrado = (cemento2) + (cal3)*/

	largoTerreno = txtIdLargo.value;
	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = txtIdAncho.value;
	anchoTerreno = parseInt(anchoTerreno);

	superficie = largoTerreno * anchoTerreno;
	cal = superficie*3;
	cemento = superficie*2;


	alert("Para el terreno de: " + superficie + " m2 se necesitan: " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
	
}
/*
txtIdLargo
txtIdAncho
txtIdRadio
*/