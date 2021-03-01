function mostrar()
{
	var i;
	var respuesta;

	for(i=0; i<100; i++)
	{
		alert("Hola");
		respuesta=prompt("Desea hacerlo otra vez?");

		if(respuesta!="si")
		{
			break;
		}
		alert("sigo");
	}
	/*
	for(i=0; i<5; i++)
	{
		alert("Hola");
		respuesta=prompt("Desea hacerlo otra vez?");

		if(respuesta=="si")
		{
			continue;  //fuerza la iteracion y NO PASA por lo que esta debajo
		}
		alert("finalizo");
	}

	*/

}