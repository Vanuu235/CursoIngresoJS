/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch(mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año!");
		break;

		case "Marzo":
			alert("a clases!");
		break;

		case "Julio":
			alert("se vienen las vacaciones!");
		break;

		case "Diciembre":
			alert("Felices fiestas!");
		break;

		default:
			alert("Ingreso un mes no válido");
	}
	
/*
OK: número entero, un caracter o cadena de caracteres
NO: rangos u operaciones logicas (valores de verdad)
*/


}//FIN DE LA FUNCIÓN