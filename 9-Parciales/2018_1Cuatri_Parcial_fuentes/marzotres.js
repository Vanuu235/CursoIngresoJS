/*CONSIGNA 3:
 "super chino" :
 Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
TipoDeStock("Pedido","sin stock", "con stock")
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a)  el NOMBRE del mas pesado de los comestibles
b)  el NOMBRE del  mas caro de todos los productos
c)  el NOMBRE del  mas barato de los elaborados
d)  de los Productos nacionales con stock , el promedio de precio
e)  el tipo de mercadería  que mas aparece
f)  el porcentaje de productos elaborados por sobre el total
g)  el promedio de pesos por cada tipo ingresado
h)  cual es el tipo con mayor promedio de pesos
i)  el importe total de la compra para productos nacionales que pesen entre 10 y 20 kg (ambos inclusive)
h)  De los tipos de stock , cual tiene mas productos nacionales*/
function mostrar()
{
	var i;
	var tipo;
	var nombre;
	var precio;
	var tipoStock;
	var procedencia;
	var peso;
	var respuesta;
	var contadorLimpieza;
	var contadorComestible;
	var contadorOtro;
	var flagMasPesado;
	var mayorPesoComestible;
	var nombreMasPesado;
	var flagMasCaroProducto;
	var precioMasCaro;
	var nombreMasCaro;
	var flagMasBarato;
	var precioMasBarato;
	var nombreMasBarato;
	var contadorImportado;
	var contadorNacional;
	var contadorElaborado;
	var contadorNacionalConStock;
	var contadorNacionalSinStock;
	var contadorNacionalPedido;
	var sumaPrecioNacionalStock;
	var promedioNacionales;
	var mayorCantidadMercaderia;
	var sumaPesoLimpieza;
	var sumaPesoComestible;
	var sumaPesoOtro;
	var promedioPesoComestible;
	var promedioPesoLimpieza;
	var promedioPesoOtro;
	var mayorPromedio;
	var importeCompraNacionales;
	var ultimoMayor;
	var porcentajeElaborados;

	i=0;
	respuesta="si";
	contadorLimpieza=0;
	contadorComestible=0;
	contadorOtro=0;
	contadorImportado=0;
	contadorNacional=0;
	contadorElaborado=0;
	contadorNacionalConStock=0;
	contadorNacionalSinStock=0;
	contadorNacionalPedido=0;
	sumaPrecioNacionalStock=0;
	sumaPesoLimpieza=0;
	sumaPesoComestible=0;
	sumaPesoOtro=0;
	importeCompraNacionales=0;
	flagMasPesado=0;
	flagMasCaroProducto=0;
	flagMasBarato=0;

	while(respuesta=="si")
	{
		i++;
		tipo=prompt("Ingrese el tipo(limpieza , comestible , otros)");
		tipo=tipo.toLowerCase();
		while(tipo!="limpieza"&&tipo!="comestible"&&tipo!="otros")
		{
			tipo=prompt("ERROR:Ingrese el tipo correcto(limpieza , comestible , otros)");
			tipo=tipo.toLowerCase();
		}

		nombre=prompt("Ingrese el nombre del producto");
		nombre=nombre.toLowerCase();

		precio=prompt("Ingrese el importe");
		precio=parseFloat(precio);
		while(precio<0||precio>1000||isNaN(precio))
		{
			precio=prompt("Error, el costo debe osilar en 1 y 1000");
		}
		if(flagMasCaroProducto==0||precio>precioMasCaro)
		{
			precioMasCaro=precio;
			nombreMasCaro=nombre;
			flagMasCaroProducto=1;
		}

		tipoStock=prompt("Ingrese el tipo de stock(Pedido,sin stock, con stock)");
		tipoStock=tipoStock.toLowerCase();
		while(tipoStock!="pedido"&&tipoStock!="sin stock"&&tipoStock!="con stock")
		{
			tipoStock=prompt("ERROR:Ingrese el tipo correcto(Pedido,sin stock, con stock)");
			tipoStock=tipoStock.toLowerCase();
		}

		procedencia=prompt("Ingrese la procedencia(importado, nacional, elaborado)");
		procedencia=procedencia.toLowerCase();
		while(procedencia!="importado"&&procedencia!="nacional"&&procedencia!="elaborado")
		{
			procedencia=prompt("ERROR:Ingrese la procedencia(importado, nacional, elaborado)");
			procedencia=procedencia.toLowerCase();
		}

		peso=prompt("Ingrese el peso");
		peso=parseFloat(peso);
		while(peso<0||peso>30||isNaN(peso))
		{
			peso=prompt("Error, el peso no debe ser mayor a 30kg");
		}

		respuesta=prompt("¿Desea ingresar otros productos? si/no");

		switch(tipo)
		{
			case "limpieza":
				contadorLimpieza++;
				sumaPesoLimpieza=sumaPesoLimpieza+peso;
			break;

			case "comestible":
				contadorComestible++;
				sumaPesoComestible=sumaPesoComestible+peso;
				if(flagMasPesado==0||peso>mayorPesoComestible)
				{
					mayorPesoComestible=peso;
					nombreMasPesado=nombre;
					flagMasPesado=1;
				}
			break;

			case "otros":
				contadorOtro++;
				sumaPesoOtro=sumaPesoOtro+peso;
			break;
		}

		switch(procedencia)
		{
			case "importado":
				contadorImportado++;
			break;

			case "nacional":
				contadorNacional++;
				if(tipoStock=="con stock")
				{
					contadorNacionalConStock++;
					sumaPrecioNacionalStock=sumaPrecioNacionalStock+precio;
				}
				else
				{
					if(tipoStock=="sin stock")
					{
						contadorNacionalSinStock++;
					}
					else
					{
						contadorNacionalPedido++;
					}
				}
				if(peso<10||peso>20)
				{
					importeCompraNacionales=importeCompraNacionales+precio;
				}
				
			break;

			case "elaborado":
				contadorElaborado++;
				if(flagMasBarato==0||precio<precioMasBarato)
				{
					precioMasBarato=precio;
					nombreMasBarato=nombre;
				}
			break;
		}	
	}
	if(contadorLimpieza>contadorComestible&&contadorLimpieza>contadorOtro)
	{
		mayorCantidadMercaderia="limpieza";
	}
	else
	{
		if(contadorComestible>contadorOtro&&contadorComestible>=contadorLimpieza)
		{
			mayorCantidadMercaderia="comestible"
		}
	}

	promedioNacionales=sumaPrecioNacionalStock/contadorNacionalConStock;
	promedioPesoComestible=sumaPesoComestible/contadorComestible;
	promedioPesoLimpieza=sumaPesoLimpieza/contadorLimpieza;
	promedioPesoOtro=sumaPesoOtro/contadorOtro;
	porcentajeElaborados=(contadorElaborado/i)*100;

	if(promedioPesoLimpieza>promedioPesoComestible&&promedioPesoLimpieza>promedioPesoOtro)
	{
		mayorPromedio="limpieza";
	}
	else
	{
		if(promedioPesoComestible>promedioPesoOtro&&promedioPesoComestible>=promedioPesoLimpieza)
		{
			mayorPromedio="comestibles";
		}
		else
		{
			mayorPromedio="otros";
		}
	}

	if(contadorNacionalConStock>contadorNacionalSinStock&&contadorNacionalConStock>contadorNacionalPedido)
	{
		ultimoMayor="con stock";
	}
	else
	{
		if(contadorNacionalSinStock>contadorNacionalPedido&&contadorNacionalSinStock>=contadorNacionalConStock)
		{
			ultimoMayor="sin stock";
		}
		else
		{
			ultimoMayor="pedido";
		}
	}
	
	document.write("A - el NOMBRE del mas pesado de los comestibles: "+ nombreMasPesado)+"<br>";
	document.write("B - el NOMBRE del  mas caro de todos los productos: "+ nombreMasCaro+"<br>");
	document.write("C - el NOMBRE del  mas barato de los elaborados: "+ nombreMasBarato+"<br>");
	document.write("D - de los Productos nacionales con stock , el promedio de precio: "+sumaPrecioNacionalStock+"<br>");
	document.write("E - el tipo de mercadería  que mas aparece: "+mayorCantidadMercaderia+"<br>");
	document.write("F - el porcentaje de productos elaborados por sobre el total "+porcentajeElaborados+"<br>");
	document.write("G - el promedio de pesos por cada tipo ingresado. limpieza: "+ promedioPesoLimpieza +" comestible: "+ promedioPesoComestible  +" otros "+promedioPesoOtro+"<br>");
	document.write("H - cual es el tipo con mayor promedio de pesos: "+mayorPromedio+"<br>");
	document.write("I - el importe total de la compra para productos nacionales que pesen entre 10 y 20 kg (ambos inclusive): "+importeCompraNacionales+"<br>");
	document.write("J - De los tipos de stock , cual tiene mas productos nacionales "+ultimoMayor+"<br>");
	
}