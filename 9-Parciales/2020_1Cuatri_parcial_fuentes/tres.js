function mostrar()
{
	var i;
	var nombre;
	var edad;
	var sexoIngresado;
	var estadoCivil;
	var temperatura;
	var respuesta;

	var contadorViudo;
	var contadorSoltero;
	var contadorCasado;
	var sumaViudo;
	var sumaSoltero;
	var sumaCasado;

	var mayorTemperatura;
	var primerTemperatura;
	var pasajeroMasTemp;
	var mayoresViudos;
	var promedioEdadSolteros;
	var hombresSolteros;
	var hombresViudos;

	i=0;
	respuesta="si";

	contadorViudo=0;
	contadorSoltero=0;
	contadorCasado=0;
	sumaEdadViudo=0;
	sumaEdadSoltero=0;
	sumaEdadCasado=0;
	primerTemperatura=true;
	mayoresViudos=0;
	hombresSolteros=0;
	hombresViudos=0;

	while(respuesta=="si")
	{
		i++;
		nombre=prompt("Ingrese el nombre del pasajero");
		nombre=nombre.toLowerCase();

		sexo=prompt("ingrese f ó m");
		sexo=sexo.toLowerCase();
		while(sexo!="f"&&sexo!="m")
		{
			sexo = prompt("Sexo inválido, por favor ingrese f ó m");
		}

		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
		while(edad<0||isNaN(edad))
		{
			edad=prompt("Edad inválida, ingrese la edad");
			edad=parseInt(edad);
		}

		estadoCivil=prompt("Ingrese el estado civil");
		while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo")
		{
			estadoCivil=prompt("ERROR: Ingrese el estado civil válido");
		}

		temperatura=prompt("Ingrese la temperatura del pasajero");
		temperatura=parseFloat(temperatura);
		if(primerTemperatura==true||temperatura>mayorTemperatura)
		{
			mayorTemperatura=temperatura;
			pasajeroMasTemp=nombre;
		}
		while(temperatura<0||isNaN(temperatura))
		{
			temperatura=prompt("ERROR: Ingrese la temperatura válida");
			temperatura=parseFloat(temperatura);
		}

		switch(estadoCivil)
		{
			case "viudo":
				contadorViudo++;
				sumaEdadViudo=sumaEdadViudo+edad;
				if(sexoIngresado=="m")
				{
					hombresViudos++;
				}
				if(edad>17)
					mayoresViudos++;

			break;

			case "soltero":
				contadorSoltero++;
				
				if(sexoIngresado=="m")
				{
					hombresSolteros++;
					sumaEdadSoltero=sumaEdadSoltero+edad;
				}

			break;

			case "casado":
				contadorCasado++;
				sumaEdadCasado=sumaEdadCasado+edad;
			break;
		}


		respuesta=prompt("¿Hay más pasajeros por cargar al vuelo? si/no");

	}
	promedioEdadSolteros=sumaSoltero/contadorSoltero;

	document.write("A- El pasajero con mayor temperatura es: "+ pasajeroMasTemp+"<br>");
	document.write("B- La cantidad de mayores de edad viudos: "+ mayoresViudos+"<br>");
	document.write("C- La cantidad de pasajeros viudos es: "+contadorViudo+"<br>");
	document.write("D- La cantidad de hombres solteros es:"+hombresSolteros+" y viudos: "+hombresViudos+"<br>");
	document.write("E- El promedio de edad de hombres solteros "+ promedioEdadSolteros+"<br>");


}
/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, 
sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas 
de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/