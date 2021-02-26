/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);
	resultado = txtIdResultado.value;
	aumento = sueldo * 10/100;
	
	
	resultado = sueldo + aumento;

	txtIdResultado.value = resultado;
}
/*tambien se podria poner 
	resultado = sueldo + (sueldo*10/100)
	pero es una operacion mas complicada que no da dato sobre el aumento
	otra opcion en vez de 10/100 es *1.1 */