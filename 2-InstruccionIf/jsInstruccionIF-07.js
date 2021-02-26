/*
Al ingresar una edad menor a 18 años y un estado 
civil distinto a "Soltero", mostrar el siguiente 
mensaje: 'Es muy pequeño para NO ser soltero.'*/

function mostrar()
{
var edad;
var estadoCivilPersona;

edad = txtIdEdad.value;
edad = parseInt(edad);
estadoCivilPersona = estadoCivil.value; /*tomar ID*/

if(edad<18 && estadoCivilPersona != "Soltero") /*tomar en cuenta como estan escritos los valores en la pagina*/
{
	alert("Es muy pequeño para NO ser soltero");
}

}