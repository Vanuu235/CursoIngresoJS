/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var unNumero;
	var otroNumero;
	var suma;

	unNumero = txtIdNumeroUno.value;
	otroNumero = txtIdNumeroDos.value;


	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

//parseInt es para reconocer numeros enteros. ParseFloat es para numeros decimales//

	suma = unNumero + otroNumero;

	alert("la suma es: " + suma);
}

