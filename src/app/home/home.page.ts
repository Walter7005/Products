import { Component, ɵCompiler_compileModuleAsync__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // acá define los json del ejemplo
  // el json es util para compartir informacion entre distintas partes de las plicaciones
  // ahora en la clasae vamos a generar un array de json con los productos

  private products = [{
    // ponemos un identificador id igual que en access
    // este es el producto 1
    "id": 1,
    "nombre": "Teléfono",
    "precio": 1500,
    "cantidad": 10, // esto es el stoock en el ejemplo
    // vamos a poner una imagen, puede sere algo que esté en la máquina o una imagen de internet con su url completa
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ericofon_1956_1.jpg/160px-Ericofon_1956_1.jpg"
  }, // fin del producto 1 --- OJO CON LA COMA PAPAFRITA !!
    
    {
      // este es el producto 2
    "id": 2,
    "nombre": "casa",
    "precio": 150000, 
    "cantidad": 1, // esto es el stoock en el ejemplo
// vamos a poner una imagen, puede sere algo que esté en la máquina o una imagen de internet con su url completa
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Casa_Grande-Casa_Grande_Stone_Church-1927.JPG/180px-Casa_Grande-Casa_Grande_Stone_Church-1927.JPG"
    },
  {
      // este es el producto 2
      "id": 3,
      "nombre": "Tele",
      "precio": 1500, 
      "cantidad": 0, // esto es el stoock en el ejemplo
  // vamos a poner una imagen, puede sere algo que esté en la máquina o una imagen de internet con su url completa
      "imagen": "http://www.tecnologiait.com.ar/wp-content/uploads/lg-tv-42lh30-large-150x150.jpg"
     
  }]
  constructor() {}

}
