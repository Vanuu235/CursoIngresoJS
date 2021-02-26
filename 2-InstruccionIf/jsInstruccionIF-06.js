/*
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o adolescente 
(entre 13 y 17 años) o niño (menor a 13 años).*/
function mostrar()
{
	var edad;
	 edad = txtIdEdad.value;
	 edad = parseInt(edad);

	if (edad>17)
	{
	 	alert("Usted de mayor de edad");
	}
	else
	{


	if (edad>13)
	{
		alert("Usted es menor");
	}

		else 
		{
			alert("Usted es adolescente");
		}
	}

}
	
 /*para evitar muchas comparaciones es mejor preguntar para que se necesita
ej, para un facultad es mejor preg primero por adultos
ej para una escuela va a haber mas adolecentes y niños*/