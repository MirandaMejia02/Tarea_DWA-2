//Objectos literales, no indexados
const animal = {
    color: "naranja",
    nombre: "Simba",
    rugiendo: true,
    //las propiedades pueden tener adentro otras propiedades
    favoritos:{
      dia:{
        ok: true,
      },
      noche:{
        ok:false
      }
    }
  }
  
  console.log(animal.favoritos.dia.ok);
 //se usa cuando estan las propiedades anidadas, NO EXISTE EN LA RAIZ "?" 
  console.log(animal.favoritos?.luna?.ok);

//guardar el calor de la propiedad en una constante
 const color = animal.color;
 const animal = animal.nombre;
 
 console.log("Color" + color + ", Animal " +nombre );
