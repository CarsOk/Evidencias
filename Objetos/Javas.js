var Hola = new hola("Jhan");
var Comoestas = new hola("Como estas Jhan");

function hola(nombre){
  this.nombre = nombre;
  this.apellido = function(){
    alert(this.nombre +"BasMar");
  };
}
alert("Nombre" + Hola.nombre);
alert("Y" + Comoestas.nombre);
Hola.apellido();
