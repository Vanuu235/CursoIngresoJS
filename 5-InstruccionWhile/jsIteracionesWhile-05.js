/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m");
	sexoIngresado=sexoIngresado.toLowerCase();//al ingresar la variable la transforma en minuscula
			//.toUpperCase() lo convierte a mayuscula
	while(sexoIngresado!="f"&&sexoIngresado!="m")
	{
		sexoIngresado = prompt("Sexo inválido, por favor ingrese f ó m");
	}
	txtIdSexo.value=sexoIngresado;
}