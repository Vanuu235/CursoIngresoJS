/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i;
	i=0;

	while(i<10)
	{

		document.write("<h2>"+(i+1)+"<br>");
		i=i+1;//incremento de la variable de control
	}



}
//FIN DE LA FUNCIÓN

/*estructuras repetitivas
	determinadas
	indeterminadas
while(condicion) //estructura repetitiva, en caso de ser verdadera
	{
		sentencia 1
		sentencia 2
		la condicion en algun momento debe ser falsa para que se corte
	}
se usan variables de control, que se nombran con letras (i,j,k,etc)
todo lo que sea mostrar algo es preferible con console.log
o document.write
si se quiere concatenar el resultado es ((i+1)+"-");
si se quiere mostrar en lista es ((i+1)+"<br>");
si se quiere cambiar el tamaño de fuente ("<h2>"+(i+1)+"<br>");

*/