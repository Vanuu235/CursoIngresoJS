/*CONSIGNA 2:
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.
*/
function mostrar()
{
	var i;
	var paises;
	var continente;
	var cantidadHabitantes;
	var nivelPobreza;
	var temperatura;
	var contadorTemperaturaPar;
	var contadorTemperaturaImparEuropa;
	var menosHabitantes;
	var minimo;
	var nombrePaisMenosHabitantes;
	var paisesMasCuarenta;
	var paisesCero;
	var promedioHabitantes;
	var sumaHabitantes;
	var promedioHabitantesMasCuarenta;
	var sumaHabitantesMasCuarenta;
	var temperaturaMinima;
	var nombreMenorTemperatura;
	var sumaAmerica;
	var sumaAsia;
	var sumaAfrica;
	var sumaEuropa;
	var sumaOceania;
	var continenteMasHabitantes;

	i=0;
	contadorTemperaturaPar=0;
	contadorTemperaturaImparEuropa=0;
	menosHabitantes=true;
	paisesMasCuarenta=0;
	paisesCero=0;
	sumaAmerica=0;
	sumaAsia=0;
	sumaAfrica=0;
	sumaEuropa=0;
	sumaOceania=0;

	while(i<5)
	{
		paises=prompt("Ingrese el nombre del país");
		paises=paises.toLowerCase();
		i++;

		continente=prompt("Ingrese el continente");
		continente=continente.toLowerCase();
		while(continente!="america"&&continente!="asia"&&continente!="europa"&&continente!="africa"&&continente!="oceania")
		{
			continente=prompt("ERROR:Ingrese el continente)");
			continente=continente.toLowerCase();
		}

		habitantes=prompt("Ingrese la cantidad de habitantes en millones (entre 1 a 7000)");
		habitantes=parseInt(habitantes);
		while(habitantes<0||habitantes>7000||isNaN(habitantes))
		{
			habitantes=prompt("Cantidad inválida, ingrese la cantidad de habitantes en millones (entre 1 a 7000)");
			habitantes=parseInt(habitantes);
		}
		if(menosHabitantes==true||habitantes>minimo)
		{
			minimo=habitantes;
			nombrePaisMenosHabitantes=paises;
			menosHabitantes==false;
		}

		nivelPobreza=prompt("Por favor, ingrese el nivel de pobreza (pobre, rico, muy rico)");
		while(nivelPobreza!="pobre"&&nivelPobreza!="rico"&&nivelPobreza!="muy rico")
		{	
			if(nivelPobreza=="pobre"||continente=="europa")
			{
				nivelPobreza=prompt("TIPO INVÁLIDO: ingrese el nivel de pobreza (pobre, rico, muy rico)");
			}
		}

		temperatura=prompt("Ingrese la temperatura minima del territorio(entre -50 y 50)");
		temperatura=parseInt(temperatura);
		while(temperatura<-50||temperatura>50||isNaN(temperatura))
		{
			temperatura=prompt("Temperatura inválida, ingrese la temperatura minima del territorio (entre -50 y 50)");
			temperatura=parseInt(temperatura);
		}

		if(temperatura%2==0)
		{
			contadorTemperaturaPar++;
		}
		else
		{
			if(temperatura%2==1||continente=="europa")
			{
				contadorTemperaturaImparEuropa++;
			}

		}

		if(temperatura>40)
		{
			paisesMasCuarenta++;
			sumaHabitantesMasCuarenta=sumaHabitantesMasCuarenta+habitantes;
		}
		else
		{
			if(temperatura<0)
			{
				if(temperatura==0||temperatura>temperaturaMinima)
				{
					temperaturaMinima=temperatura;
					nombreMenorTemperatura=nombre;
					temperatura=1;
				}
				else
				{
					paisesCero++;
				}
			}

		}

		switch(continente)
		{
			case "america":
				sumaAmerica=sumaAmerica+habitantes;
			break;

			case "asia":
				sumaAsia=sumaAsia+habitantes;
			break;

			case "africa":
				sumaAfrica=sumaAfrica+habitantes;
			break;

			case "europa":
				sumaEuropa=sumaEuropa+habitantes;
			break;

			case "oceania":
				sumaOceania=sumaOceania+habitantes;
			break;
		}
		sumaHabitantes=sumaAmerica+sumaAfrica+sumaAsia+sumaEuropa+sumaOceania;

		if(sumaAmerica>sumaEuropa&&sumaAmerica>sumaAsia&&sumaAmerica>sumaAfrica&&sumaAmerica>sumaOceania)
		{
			continenteMasHabitantes="america";
		}
		else
		{
			if(sumaEuropa>sumaAsia&&sumaEuropa>sumaAfrica&&sumaEuropa>sumaOceania&&sumaEuropa>=sumaAmerica)
			{
				continenteMasHabitantes="europa";
			}
			else
			{
				if(sumaAsia>sumaAfrica&&sumaAsia>sumaOceania&&sumaAsia>=sumaAmerica&&sumaAsia>sumaEuropa)
				{
					continenteMasHabitantes="asia";
				}
				else
				{
					if(sumaAfrica>sumaOceania&&sumaAfrica>=sumaAmerica&&sumaAfrica>=sumaEuropa&&sumaAfrica>=sumaAsia)
					{
						continenteMasHabitantes="africa";
					}
					else
					{
						continenteMasHabitantes="oceania";
					}


				}
			}
		}
	}
	promedioHabitantes=sumaHabitantes/5;
	promedioHabitantesMasCuarenta=sumaHabitantesMasCuarenta/paisesMasCuarenta;


	document.write("a)La cantidad de temperaturas pares: "+ contadorTemperaturaPar +"<br>");
	document.write("b)La cantidad de temperaturas impares de europa " + contadorTemperaturaImparEuropa +"<br>");
	document.write("c)El nombre del pais con menos habitantes "+ nombrePaisMenosHabitantes+" con: "+minimo+ " habitantes " + "<br>");
	document.write("d)La cantidad de paises que superan los 40 grados."+ paisesMasCuarenta +"<br>");
	document.write("e)la cantidad de paises de america que tienen menos de 0 grados."+ paisesCero +"<br>");
	document.write("f)el promedio de habitantes entre los paises ingresados "+ promedioHabitantes +"<br>");
	document.write("g)el promedio de habitantes entre los paises que superan los 40 grados"+ promedioHabitantesMasCuarenta +"<br>");
	document.write("H) la temperatura mínima ingresada " + temperaturaMinima+ "y nombre del pais que registro esa temperatura. "+ nombreMenorTemperatura +"<br>");
	document.write("i) que continente tiene mas habitantes." + continenteMasHabitantes);

}