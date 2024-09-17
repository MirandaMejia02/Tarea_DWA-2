//Objectos literales, no indexados
const animal = {
    color: "azul",
    nombre: "Torogoz",
    vuela: true
  }
  
//   destruturing...
  
  const {color, nombre, vuela} = animal;
  console.log("El" + nombre + "es de color: " + color);
//Importante el nombre de la propiedad 
//  arrays indexados
  const frutas = ["pera","manzana","sandia"];
// IMPORTANTE RESPETAR EL ORDEN, !!TIENE UN INDICE¡¡
// destruturing array
  const [pera, manzana, sandia] = frutas;
  console.log("Es un buena fuente de energia la  " + manzana);

//Interpolaciòn, Operador tenerio
