function mostrar()
{
  var unNombre;
  var otroNombre;
  var unPeso;
  var otroPeso;
  var promedio;

  unNombre = prompt ("Por favor ingrese su nombre: ");
  otroNombre = prompt ("Por favor ingrese su nombre: ");

  unPeso = prompt ("Por favor ingrese su peso; ");
  otroPeso = prompt ("Por favor ingrese su peso; ");

  unPeso = parseInt(unPeso);
  otroPeso = parseInt(otroPeso);

  promedio = (unPeso + otroPeso)/2;

  alert("Bienvenidos " + unNombre + " y " + otroNombre + ". Cada uno pesa: " + unPeso + " Kg y " + otroPeso + " Kg, que sumados son un promedio de: " + promedio + " kilos. ")
}
