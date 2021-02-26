/*Al presionar el Botón, asignar una nota RANDOM al examen y
 mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10) + 1;

	/*
	alert(numeroRandom);

	if(numeroRandom >= 8)
	{
		alert("¡Excelente!");
	}

	else if (numeroRandom<4)
	{
		alert("Vamos, la próxima se puede");

	}
		else
		{
			alert("Aprobó");
		}
		*/


	
	if(numeroRandom>8)
	{
		mensaje = "Excelente";
	}
	else
	{
		if (numeroRandom>3)
		{
			mensaje = "Aprobó";

		}
		else
		{
			mensaje = "Vamos, la próxima se puede";
		}

	}
	alert(mensaje + ". Su nota es: " + numeroRandom);
		
}