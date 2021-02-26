function mostrar()
{
	var i;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;		/* revisar porque no funciona*/
	var respuesta;
	var contadorM;
	var contadorF;
	var contadorSoltero;
	var contadorCasado;
	var contadorViudo;
	var contadorMayoresViudos;
	var sumaEdadSolteros;
	var promedioEdad;
	var mayorTemperatura;
	var nombreMayorTemperatura;
	var flagMayorTemperatura;

	i=0;
	respuesta="si";
	/*flagMayorTemperatura=0;
	contadorM=0;
	contadorF=0;
	contadorSoltero=0;
	contadorCasado=0;
	contadorViudo=0;
	sumaEdadSolteros=0;*/

	while(respuesta=="si");
	{
		nombre=prompt("Ingrese el nombre del pasajero");
		i++;

		sexo=prompt("ingrese f ó m");
		sexo=sexo.toLowerCase();
		if(sexo!="f"&&sexo!="m")
		{
			sexo = prompt("Sexo inválido, por favor ingrese f ó m");
		}

		edad=prompt("Ingrese la edad");
		if(edad<0||isNaN(edad))
		{
			edad=prompt("Edad inválida, ingrese la edad");
		}

		estadoCivil=prompt("Ingrese el estado civil");
		if(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo")
		{
			estadoCivil=prompt("ERROR: Ingrese el estado civil válido");
		}

		temperatura=prompt("Ingrese la temperatura del pasajero");
		temperatura=parseFloat(temperatura);
		if(temperatura<0||isNaN(temperatura))
		{
			temperatura=prompt("ERROR: Ingrese la temperatura válida");
			temperatura=parseFloat(temperatura);
		}
//persona con mayor temperatura
		if(flagMayorTemperatura==0||temperatura>mayorTemperatura)
			mayorTemperatura=temperatura;
			nombreMayorTemperatura=nombre;
			flagMayorTemperatura=1;

		respuesta=prompt("¿Hay más pasajeros por cargar al vuelo? si/no");	
//cantidad solteros
		if(sexo=="m"||estadoCivil=="soltero")

		{
			contadorSoltero++;
			sumaEdadSolteros=sumaEdadSolteros+edad;
		}
		else
		{
//cuantos viudos mayores de edad
			if(sexo=="m"||estadoCivil=="viudo"||edad<18)
			{
				contadorViudo++;
			}
			else
			{
				if(sexo=="m"||estadoCivil=="casado")				
				{
					contadorCasado++;
				}
			}
		}
//tercera edad con mas temperatura
		while(edad<60||temperatura<38)
		{
			contadorMayoresViudos;
		}

	}

	promedioEdad=sumaEdadSolteros/contadorSoltero;

	
}
/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de 
temperatura
e) El promedio de edad entre los hombres solteros.*/