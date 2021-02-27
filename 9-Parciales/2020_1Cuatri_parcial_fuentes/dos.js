function mostrar()
{//nombro variables
	var i;
	var producto;
	var arena;
	var cal;
	var cemento;
	var cantidadBolsas;
	var cantidadTotalBolsas;
	var respuesta;
	var sumaBolsas;
	var precio;					/*falta NO mostrar el precio con decuento si son menos de 10*/
	var precioTotal;
	var precioConDescuento;
	var descuento;
	var contadorArena;
	var contadorCal;
	var contadorCemento;
	var sumaArena;
	var sumaCal;
	var sumaCemento;
	var mayorCantidad;
	var MayorPrecio;
	var productoMayorPrecio;
	var flagPrecio;
	
//inicio variables
	i=0;
	respuesta="si";
	sumaBolsas=0;
	precioTotal=0;
	contadorArena=0;
	contadorCal=0;
	contadorCemento=0;
	sumaArena=0;
	sumaCal=0;
	sumaCemento=0;
//flag
	flagPrecio=0;
//creo bucle
	while(respuesta=="si")
	{
//pido productos y valido	
		producto=prompt("Ingrese productos (arena, cal, cemento)");
		i++;

		while(producto!="arena"&&producto!="cal"&&producto!="cemento")
		{
			producto=prompt("ERROR.Ingrese productos válidos (arena, cal, cemento)");
		}

		cantidadBolsas=prompt("Ingrese la cantidad de bolsas");
		cantidadBolsas=parseInt(cantidadBolsas);
		sumaBolsas= sumaBolsas+cantidadBolsas;
		while(cantidadBolsas<0)
		{
			cantidadBolsas=prompt("ERROR:Ingrese la cantidad de bolsas válida");
			cantidadBolsas=parseInt(cantidadBolsas);
		}

		precio=prompt("Ingrese el precio");
		precio=parseFloat(precio);
		precioTotal= precioTotal+precio;
		while(precio<0)
		{
			precio=prompt("ERROR:Ingrese el precio válido");
			precio=parseFloat(precio);
		}

		if(flagPrecio==0||precio>MayorPrecio)
		{
			MayorPrecio=precio;
			productoMayorPrecio=producto;
			flagPrecio=1;
		}

		switch(producto)
		{
			case "arena":
				contadorArena++;
				sumaArena=sumaArena+cantidadBolsas;
			break;

			case "cal":
				contadorCal++;
				sumaCal=sumaCal+cantidadBolsas;
			break;

			case "cemento":
				contadorCemento++;
				sumaCemento=sumaCemento+cantidadBolsas;
			break;
		}

		respuesta=prompt("¿Desea seguir agregando productos? si/no");
	}
		cantidadTotalBolsas=sumaCemento+sumaCal+sumaArena;

		if(cantidadTotalBolsas<30)
		{
				descuento=25;
		}
		else
		{
			if(cantidadTotalBolsas<10)
			{
				descuento=15;	
			}
			else
			{
				descuento=0;
				alert("No se aplico ningún descuento");
			}
		}
		precioConDescuento=precioTotal-(precioTotal*descuento/100);

		if(sumaArena>sumaCal&&sumaArena>sumaCemento)
		{
			mayorCantidad="arena";
		}
		else
		{
			if(sumaCal>sumaCemento&&sumaCal>=sumaArena) 
			{
				mayorCantidad="cal";
			}
			else
			{
				mayorCantidad="cemento";
			}
		}
	document.write("El total de la compra es de: "+precioTotal+"<br>");
	document.write("Aplicando el descuento por llevar más unidades debe abonar: "+precioConDescuento+"<br>");
	document.write("El producto con más bolsas compradas fue: "+mayorCantidad+"<br>");
	document.write("El producto más caro fue: "+productoMayorPrecio + " valiendo: "+MayorPrecio);

}
/*Realizar el algoritmo que permita ingresar los datos de una compra 
productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el 
total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el 
total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/