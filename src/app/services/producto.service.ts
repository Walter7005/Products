import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  /** inicio de lo eliminado el 20200905
  private products:Array<Producto> = [{
    /** 29-08 
        Primero que nada hemos creado un servicio que aloje la lógica 
     que va a compartir con todas las páginas del proyecto
     para acceder a esta lógica se utilizan los métodos que están creados abajo del constructor

     para crear el servicio hemos ejecutado el mismo comando que cuando creamos otra página
            $ ionic generate service nombre_srv
     para limpieza ese servicio lo creamos dentro de una carpeta llamada services poniendo la barra /
            $ ionic generate service services/producto
            
        Segundo, sacamos de la página home los datos de los que se alimenta 
     la tiendita para traerlos acá

        Tercero,  hemos convertido la estructura json 
                    private productos =[{
                      "dato0.0": valor1.1; "dato0.1": valor1.2},
                      "dato1.0": valor2.1; "dato1.1": valor2.2}]
                  en un array de producto, que está tipado en producto.ts
                    export class Producto{
                      public id: string;
                      public nombre: string;
                      public precio: number;
                      public imagen: string;
                      public cantidad: number;
                  esto ayuda a que cuando carguemos datos nos salte el error
                si ponemos un numero donde va un string, etc
                luego podemos sumar cantidades o concatenar textos sin miedo
    
                
   // 22-08 ponemos un identificador id igual que en access
    
    // este es el producto 1
    "id": "1",
    "nombre": "Teléfono",
    "precio": 1500,
    "cantidad": 10, // esto es el stoock en el ejemplo
    // vamos a poner una imagen, puede sere algo que esté en la máquina o una imagen de internet con su url completa
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ericofon_1956_1.jpg/160px-Ericofon_1956_1.jpg"
  }, // fin del producto 1 --- OJO CON LA COMA PAPAFRITA !!
    
    {
      // este es el producto 2
    "id": "2",
    "nombre": "Caserón",
    "precio": 1500000, 
    "cantidad": 1, // esto es el stoock en el ejemplo
// vamos a poner una imagen, puede sere algo que esté en la máquina o una imagen de internet con su url completa
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Casa_Grande-Casa_Grande_Stone_Church-1927.JPG/180px-Casa_Grande-Casa_Grande_Stone_Church-1927.JPG"
    },
  {
      // este es el producto 2
      "id": "3",
      "nombre": "Tele",
      "precio": 1500, 
      "cantidad": 0, // esto es el stoock en el ejemplo
  // vamos a poner una imagen, puede sere algo que esté en la máquina o una imagen de internet con su url completa
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Televisio3DPhilips_mirrored.png/180px-Televisio3DPhilips_mirrored.png"
     
  
    }]
    lo eliminado el 20200905  */

  public cestaDeLaCompra: Array<Producto> = [];
  // opcion B ... public cestaDeLaCompra: Array<CarritoProductos> = [];
    // 200902.3
    // Profe lo pone public para no tener que crear un método
    // con los corchetes la pasamos vacía
    // hay que volver a productos.page.TS
  
  constructor(private httpClient: HttpClient) { }
  
  public updateProducto(producto: Producto) {
    return this.httpClient.put("http://localhost:3000/productos/" + producto.id, producto)
  }
  
  public borrarUno(producto: Producto) {
    return this.httpClient.delete("http://localhost:3000/productos/" + producto.id)
  }

  public obtenerTodos() {
    return this.httpClient.get<Producto[]>("http://localhost:3000/productos"); // fijate la coincidencia
  }
  
  public addProducto(producto: Producto) {
    return this.httpClient.post("http://localhost:3000/productos", producto);
  }

  public obtenerPorID(id: string) {
    return this.httpClient.get<Producto>("http://localhost:3000/productos/" + id);
    /** eliminado el 2020SEP05 
     * for (let prod of this.products) {
     * if (prod.id == id) {
     *   return prod;
     * } */
    
    
    }  // utilizamos let y no var porque var es una variable global

  
  public getPrecioTotal() :number {
    let sumaDePrecios= 0;
    for (let cesta of this.cestaDeLaCompra) {
      sumaDePrecios = sumaDePrecios + cesta.precio;
    }
    return sumaDePrecios;
    }  // utilizamos let y no var porque var es una variable global
}