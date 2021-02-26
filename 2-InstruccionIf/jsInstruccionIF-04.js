/*Al ingresar una edad debemos informar si
 la persona es adolescente, 
 edad entre 13 y 17 años (inclusive) .*/

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>12 && edad<18) //nos optimo edad>=13 && edad <=18
	{
		/*otra opcion
		if(edad>12) condicion 1
		{
			if(edad<18)condicion 2
			{
	
			}
		}

		*/
		alert("Usted es adolescente");
	}	


}