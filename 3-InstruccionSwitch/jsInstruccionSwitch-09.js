/*una agencia de viajes debe sacar las tarifas de los viajes,se 
cobra $15.000 por cada estadia como base, se pide el ingreso de
una estacion del año y localidad para vacacionar para poder
calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un 
descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento 
del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% Mar del plata tiene un 
aumento del 10% y Cordoba tiene el precio sin descuento*/
function mostrar()
{
	var estacionIngresada;
	var localidad;
	var tarifaBase;
	var mensaje;
	var descuento;
	var aumento;
	var tarifaFinal;

	estacionIngresada=txtIdEstacion.value
	localidad=txtIdDestino.value;
	tarifaBase=15000;
	tarifaBase=parseInt(tarifaBase);
	aumento=0;
	descuento=0;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(localidad=="Bariloche")
			{
				aumento=20;
			}
			else
			{
				if(localidad=="Mar del plata")
				{
					descuento=20;
				}
				else
				{
					descuento=10;
				}
			}

		break;

		case "Verano":
			if (localidad=="Bariloche")
			{
				descuento=20;
			}
			else
			{
				if (localidad=="Mar del plata")
				{
					aumento=20;
				}
				else
				{
					aumento=10;
				}
			}

		break;

		case "Otoño":
		case "Primavera":
			if (localidad=="Cordoba")
			{
				tarifaBase;

			}
			else 
			{
				aumento=10;
			}
	}

	if(aumento!=0)
	{
		tarifaFinal=tarifaBase + (tarifaBase*aumento/100);
	}
	else
	{
		if(descuento!=0)
		{
			tarifaFinal=tarifaBase-(tarifaBase*descuento/100);
		}
	}

	alert("El precio final de su viaje a " + localidad + " es de: $" + tarifaFinal + " pesos.")
}