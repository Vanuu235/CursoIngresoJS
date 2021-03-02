/*CONSIGNA 1:
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria necesitan saber si es un gato
o un perrro u "otra cosa",(solo hay esos tres tipos) el tipo de pelaje (corto, largo , sin pelo),la edad de la mascota (edad 
validada);el nombre (una palabra) la raza  (una palabra) el peso (peso validado) el estadoClinico (enfermo,internado o 
adopcion) la temperaruta corporal y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano

*/
function mostrar()
{
	var i;
	var mascota;
	var pelo;
	var edad;
	var nombre;
	var raza;
	var peso;
	var estadoClinico;
	var temperatura;
	var respuesta;
	var contadorPerro;
	var contadorGato;
	var contadorOtroAnimal;
	var contadorEnfermos;
	var contadorInternado;
	var contadorAdopcion;
	var perroMasPesado;
	var nombreMasPesado;
	var nombreOtra;
	var animalSinPelo;
	var flagMenorTemperatura;
	var temperaturaSinPelo;
	var sumaTemperaturaPerro;
	var sumaTemperaturaGato;
	var sumaTemperaturaOtro;
	var promedioMayorTemperatura;
	var tipoMayorTemperatura;
	var sumaPerroGato;
	var menorEstado;
	var cantidadMenorEstado;
	var sumaPeso;
	var promedioPeso;
	var flagGatoLiviano;
	var nombreGatoLiviano;
	var razaGatoLiviano;
	var sumaPesoPerros;
	var sumaPesoGatos;
	var sumaPesoOtros;
	
	i=0;
	respuesta="si";
	contadorPerro=0;
	contadorGato=0;
	contadorOtroAnimal=0;
	perroMasPesado=0;
	contadorEnfermos=0;
	contadorAdopcion=0;
	contadorInternado=0;
	sumaTemperaturaPerro=0;
	sumaTemperaturaGato=0;
	sumaTemperaturaOtro=0;
	flagGatoLiviano=0;
	sumaPesoPerros;
	sumaPesoGatos;
	sumaPesoOtros;

	while(respuesta=="si")
	{
		mascota=prompt("Por favor, ingrese el tipo de animal (perro, gato u otro)");
		mascota=mascota.toLowerCase();
		i++;
		while(mascota!="gato"&&mascota!="perro"&&mascota!="otro")
		{
			mascota=prompt("TIPO INVÁLIDO: ingrese el tipo de animal (perro, gato u otro)");
			mascota=mascota.toLowerCase();
		}

		pelo=prompt("Por favor, ingrese el tipo de pelaje (corto, largo, sin pelo)");
		pelo=pelo.toLowerCase();
		while(pelo!="corto"&&pelo!="largo"&&pelo!="sin pelo")
		{
			pelo=prompt("TIPO INVÁLIDO: ingrese el tipo de pelaje (corto, largo, sin pelo)");
			pelo=pelo.toLowerCase();
		}

		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
		while(edad<0||edad>25||isNaN(edad))
		{
			edad=prompt("Edad inválida, ingrese la edad");
			edad=parseInt(edad);
		}

		nombre=prompt("Ingrese el nombre de la mascota");
		nombre=nombre.toLowerCase();

		raza=prompt("Ingrese la raza del animal");
		raza=raza.toLowerCase();

		peso=prompt("Ingrese el peso");
		peso=parseInt(peso);
		sumaPeso=sumaPeso+peso;
		while(peso<0||peso>60||isNaN(peso))
		{
			peso=prompt("PESO INVÁLIDO, ingrese el peso");
			peso=parseInt(peso);
		}

		estadoClinico=prompt("Ingrese el estado clinico(enfermo, internado, adopcion)");
		estadoClinico=estadoClinico.toLowerCase();
		while(estadoClinico!="enfermo"&&estadoClinico!="internado"&&estadoClinico!="adopcion")
		{
			estadoClinico=prompt("ERROR: Ingrese el estado clinico válido (enfermo, internado, adopcion)");
			estadoClinico=estadoClinico.toLowerCase();
		}
		
		temperatura=prompt("Ingrese la temperatura del animal");
		temperatura=parseFloat(temperatura);
		while(temperatura<34||temperatura>42||isNaN(temperatura))
		{
			temperatura=prompt("TEMPERATURA INVÁLIDA, ingrese la correcta");
			temperatura=parseInt(temperatura);
		}

		respuesta=prompt("¿Desea seguir ingresando mascotas? si/no");

		switch(mascota)
		{
			case "perro":
				contadorPerro++;
				sumaPesoPerros=sumaPesoPerros+peso;
				sumaTemperaturaPerro=sumaTemperaturaPerro+temperatura;
				if(contadorPerro==0||peso>perroMasPesado)
				{
					perroMasPesado=peso;
					nombreMasPesado=nombre;
				}
			break;

			case "gato":
			contadorGato++;
			sumaPesoGatos=sumaPesoGatos+peso;
			sumaTemperaturaGato=sumaTemperaturaGato+temperatura;
			if(flagGatoLiviano==0||pelo=="sin pelo")
			{
				nombreGatoLiviano=nombre;
				razaGatoLiviano=raza;
				flagGatoLiviano=1;
			}

			break;

			case "otro":
				contadorOtroAnimal++;
				sumaPesoOtros=sumaPesoOtros+peso;
				sumaTemperaturaOtro=sumaTemperaturaOtro+temperatura;
				nombreOtra=nombre;
				
			break;
		}
		switch(estadoClinico)
		{
			case "enfermo":
			contadorEnfermos++;
			break;

			case "internado":
			contadorInternado++;
			break;

			case "adopcion":
			contadorAdopcion++;
			break;

		}
		if(flagMenorTemperatura==0||temperaturaSinPelo<temperatura)
		{
			temperaturaSinPelo=temperatura;
			animalSinPelo=mascota;
			flagMenorTemperatura=1;
		}
	}
	promedioEnfermos= contadorEnfermos/mascota;
	sumaPeso=sumaPesoPerros+sumaPesoGatos+sumaPesoOtros
	promedioPeso= sumaPeso/mascota;

	if(sumaTemperaturaPerro>sumaTemperaturaGato&&sumaTemperaturaPerro>sumaTemperaturaOtro)
	{
		tipoMayorTemperatura="perro";
		promedioMayorTemperatura=sumaTemperaturaPerro/contadorPerro;
	}
	else
	{
		if(sumaTemperaturaGato>sumaTemperaturaOtro&&sumaTemperaturaGato>=sumaTemperaturaPerro)
		{
			tipoMayorTemperatura="gato";
			promedioMayorTemperatura=sumaTemperaturaGato/contadorGato;
		}
		else
		{
			if(sumaTemperaturaOtro>=sumaTemperaturaPerro&&sumaTemperaturaOtro>=sumaTemperaturaGato)
			{
				tipoMayorTemperatura="otro";
				promedioMayorTemperatura=sumaTemperaturaOtro/contadorOtroAnimal;
			}
		}
	}

	sumaPerroGato=contadorGato+contadorPerro;

	if(contadorEnfermos<contadorAdopcion&&contadorEnfermos<contadorInternado)
	{
		menorEstado="enfermo";
		cantidadMenorEstado=contadorEnfermos;
	}
	else
	{
		if(contadorAdopcion<contadorInternado&&contadorAdopcion<=contadorEnfermos)
		{
			menorEstado="adopcion";
			cantidadMenorEstado=contadorAdopcion;
		}
		else
		{
			menorEstado="internado";
			cantidadMenorEstado=contadorInternado;
		}
	}

	document.write("A- El perro más pesado era: "+ nombreMasPesado +" de: "+perroMasPesado +" kilos."+"<br>");
	document.write("B- El tipo con más enfermos: "+promedioEnfermos+"<br>");
	document.write("C- La ultima mascota tipo otra fue: "+nombreOtra+"<br>");
	document.write("D- El animal sin pelo con menor temperatura corporal: " + animalSinPelo + " con: "+ temperaturaSinPelo+"<br>");
	document.write("E- Que tipo de mascota(gato o un perrro u otra cosa) que tiene el mayor promedio de temperatura corporal: "+tipoMayorTemperatura+" con promedio: "+promedioMayorTemperatura+"<br>");
	document.write("F- Sumando gatos y perros que porcentaje del total de mascotas son?"+sumaPerroGato+"<br>");
	document.write("G- Que estado clinico tiene la menor cantidad de mascotas: "+ menorEstado+" con: "+cantidadMenorEstado+"<br>");
	document.write("H- Cual es el promedio de kilos de peso de tomando todas las mascotas: "+promedioPeso+"<br>");
	document.write("I- El nombre y raza del gato sin pelos mas liviano. Nombre: "+nombreGatoLiviano+" raza: "+razaGatoLiviano+"<br>");
}
