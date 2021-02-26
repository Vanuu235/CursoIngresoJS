function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Usuahia":
			mensaje ="frío";
		break;

		case "Cataratas":
		case "Mar del plata":
			mensaje = "calor";
		break;
	}
alert("En este destino hace " + mensaje);
}