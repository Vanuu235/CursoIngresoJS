function mostrar()
{
 var precio;
 var descuento;
 var descuentoAplicado;
 var precioFinal;

 precio = prompt("Por favor ingrese el precio ");
 descuento = prompt ("Por favor ingrese descuento a realizar ");

 descuentoAplicado = precio*descuento/100;
 precioFinal = precio - descuentoAplicado;

 elPrecioFinal.value = precioFinal;
}
