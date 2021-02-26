/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert("La suma de ambos es: " + suma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resta = numeroUno - numeroDos;

	alert("La resta de ambos es: " + resta);
	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicar;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	multiplicar = numeroUno * numeroDos;

	alert("La multiplicacion entre ambos es: " + multiplicar);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	division = numeroUno / numeroDos;

	alert("La division entre de ambos es: " + division);
}

/* txtIdNumeroUno 
txtIdNumeroDos*/