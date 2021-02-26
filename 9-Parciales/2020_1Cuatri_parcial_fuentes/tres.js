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

	i=0;
	respuesta="si";

	contadorViudo=0;
	contadorSoltero=0;
	contadorCasado=0;
	sumaEdadViudo=0;
	sumaEdadSoltero=0;
	sumaEdadCasado=0;

	while(respuesta=="si")
	{
		i++;
		nombre=prompt("Ingrese el nombre del pasajero");

		sexo=prompt("ingrese f ó m");
		sexo=sexo.toLowerCase();
		while(sexo!="f"&&sexo!="m")
		{
			sexo = prompt("Sexo inválido, por favor ingrese f ó m");
		}

		edad=prompt("Ingrese la edad");
		while(edad<0||isNaN(edad))
		{
			edad=prompt("Edad inválida, ingrese la edad");
		}

		estadoCivil=prompt("Ingrese el estado civil");
		while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo")
		{
			estadoCivil=prompt("ERROR: Ingrese el estado civil válido");
		}

		temperatura=prompt("Ingrese la temperatura del pasajero");
		temperatura=parseFloat(temperatura);
		while(temperatura<0||isNaN(temperatura))
		{
			temperatura=prompt("ERROR: Ingrese la temperatura válida");
			temperatura=parseFloat(temperatura);
		}

		respuesta=prompt("¿Hay más pasajeros por cargar al vuelo? si/no");

		switch(estadoCivil)
		{
		case "viudo":
			contadorViudo++;
			sumaEdadViudo=sumaEdadViudo+edad;
		break;

		case "soltero":
			contadorSoltero;
			sumaEdadSoltero=sumaEdadSoltero+edad;
		break;

		case "casado":
			contadorCasado++;
			sumaEdadCasado=sumaEdadCasado+edad;
		break;
		}
		
	}
	

	console.log(contadorViudo);
	console.log(sumaEdadViudo);
	console.log(contadorSoltero);
	console.log(sumaEdadSoltero);
	console.log(contadorCasado);
	console.log(sumaEdadCasado);
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