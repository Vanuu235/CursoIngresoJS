function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var lugar;

	switch(destinoIngresado)
	{
		case "Bariloche":
			lugar="Oeste";
		break;

		case "Cataratas":
			lugar="Norte";
		break;

		case "Mar del plata":
			lugar="Este";
		break;

		case "Ushuaia":
			lugar="Sur";
		break;
	}
alert("El destino se encuentra en el " + lugar +" Argentino");
}