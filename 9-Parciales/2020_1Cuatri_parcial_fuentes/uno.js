function mostrar()
{//declarar variables a pedir
	var cantidad;
	var fabricante;
	var marca;
	var producto;
	var precio;
	var i;//control
//declaro acumuladores y contadores a usar
	var acumuladorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
//consigna alcohol barato
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var precioAlcoholBarato;
	//var flagAlcohol;
	var mensajeAlcohol;
//consigna mas comprado
	var mayorCantidad;
	var promedioCompra;
//inicializar acumuladores	
	i=0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
//iniciar contadores	
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
//flags
	flagAlcohol=0;


//inicio bucle
	while(i<5)
	{//pido datos y valido
		producto=prompt("Por favor, ingrese el producto (barbijo,jabon o alcohol)");
		i++;

		while(producto!="barbijo"&&producto!="jabon"&&producto!="alcohol")
		{
			producto=prompt("Producto inválido, ingrese el producto(barbijo,jabon o alcohol)");
		}

		precio=prompt("¿Cúal fué el costo?");
		precio=parseFloat(precio);
		while(precio<100||precio>300||isNaN(precio))
		{
			precio=prompt("Error, el costo debe osilar en 100 y 300");
		}

		cantidad=prompt("¿Cuántas unidades se adquirieron?");
		cantidad=parseInt(cantidad);
		while(cantidad<0||cantidad>1000)
		{
			cantidad=prompt("Error, mínimo 1 unidad, máximo 100 unidades");
		}

		marca=prompt("Ingrese la marca.");
		fabricante=prompt("Ingrese el fabricante.");
	
	switch(producto)
	{
		case "alcohol":
			if(flagAlcohol==0||precio>precioAlcoholBarato)
			{
				precioAlcoholBarato=precio;
				cantidadAlcoholBarato=cantidad;
				fabricanteAlcoholBarato=fabricante;
				flagAlcohol=1;
			}
			contadorAlcohol++;
			acumuladorAlcohol= acumuladorAlcohol+ cantidad;

		break;

		case "barbijo":
			acumuladorBarbijo=acumuladorBarbijo+cantidad;
			contadorBarbijo++;
		break;

		case "jabon":
			acumuladorJabon=acumuladorJabon+cantidad;
			contadorJabon++;

		break;

		}
	}

	if(acumuladorAlcohol>acumuladorBarbijo&&acumuladorAlcohol>acumuladorJabon)
	{

		mayorCantidad="alcohol";
		promedioCompra= acumuladorAlcohol/contadorAlcohol;
	}

	else
	{
		if(acumuladorBarbijo>acumuladorJabon&&acumuladorBarbijo>=acumuladorAlcohol)
		{
			mayorCantidad="barbijo";
			promedioCompra= acumuladorBarbijo/contadorBarbijo;
		}
		else
		{
			mayorCantidad="jabon";
			promedioCompra= acumuladorJabon/contadorJabon;
		}
	}
	if(contadorAlcohol==0)
	{
		document.write("No se compraron alcoholes");	
	}
	else
	{
		document.write("El alcohol más barato fue el de: " + fabricanteAlcoholBarato+" y se compraron " +cantidadAlcoholBarato+ "<br>");
	}
	
	document.write("El producto mas comprado fue: " + mayorCantidad +"<br>"+"Valiendo un promedio por compra de: " + promedioCompra + "<br>");
	document.write("La cantidad de jabones fue:" + acumuladorJabon);//no muestra

}
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol"),el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 
1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
/*function mostrar()
{//declarar variables a pedir
	var cantidad;
	var fabricante;
	var marca;
	var producto;
	var precio;
	var i;//control
	var alcoholMasBarato;
	var minimoPrecioAlcohol;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var promedio;
	var productoPromedio;

	var cantidadAlcohol;
	var acumuladorAlcohol;
	var cantidadJabon;
	var acumuladorJabon;
	var cantidadBarbijo;
	var acumuladorBarbijo;

	alcoholMasBarato=true;
	cantidadAlcohol=0;
	acumuladorAlcohol=0;
	cantidadJabon=0;
	acumuladorJabon=0;
	cantidadBarbijo=0;
	acumuladorBarbijo=0;

	for(i=0; i<5;i++)
	{
		producto=prompt("Ingrese producto");
		producto=producto.toLowerCase();
		while(producto!="barbijo"&&producto!="jabon"&&producto!="alcohol")
		{
			producto=prompt("ERROR:Ingrese producto valido");
		}

		precio=prompt("Ingrese precio");
		precio=parseFloat(precio);
		while(precio<100||precio>300)
		{
			precio=prompt("Ingrese precio");
			precio=parseFloat(precio);
		}

		cantidad=prompt("Ingrese cantidad");
		cantidad=parseInt(cantidad);
		while(cantidad<1||cantidad>1000)
		{
			cantidad=prompt("ERROR: Ingrese cantidad");
			cantidad=parseInt(cantidad);
		}

		marca= prompt("Ingrese marca");
		fabricante= prompt(fabricante);
	
	}
	switch(producto)
	{
		case "alcohol":
			if(cantidadAlcohol==0||precio<minimoPrecioAlcohol)
			{
				minimoPrecioAlcohol=precio;
				cantidadAlcoholBarato=cantidad;
				fabricanteAlcoholBarato=fabricante;
			}
			cantidadAlcohol++;
			acumuladorAlcohol=+ cantidad;
		break;

		case "barbijo":
			cantidadBarbijo++;
			acumuladorBarbijo=+ cantidad;
		break;

		case "jabon":
			cantidadJabon++;
			acumuladorJabon=+ cantidad
		break;
	}
	if(acumuladorJabon>acumuladorBarbijo&&acumuladorJabon>acumuladorAlcohol)
	{
		productoPromedio="jabon";
		promedio=acumuladorJabon/cantidadJabon;
	}
	else
	{
		if(acumuladorBarbijo>acumuladorAlcohol)
		{
			productoPromedio="barbijo";
			promedio=acumuladorBarbijo/cantidadBarbijo;
		}
	}
	if(cantidadAlcohol!=0)
	{

	}
}*/