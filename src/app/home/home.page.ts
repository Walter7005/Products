import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /**  al principio del curso aquí defijimos un conjunto de json como los del ejemplo
   * a fecha 29AGO nos lo llevamos de acá para que estuviera en un servicio
   el json es util para compartir informacion entre distintas partes de las aplicaciones
   ahora en la clasae vamos a generar un array de json con los productos
  */
  private products; /** este products coincide con el nombre definido en
                        export class ProductoService {
                        private productos:Array<Producto> = <sigue .....> 
                    */
  private cestaDeLaCompra: Array<Producto> = [];
  
  constructor(private prodSrv: ProductoService) { }
  
  ngOnInit() {
    // lo primero que hacemos es invocar el métdodo de obtenerTodos
    // eliminado el 2020SEP05 ... this.products = this.prodSrv.obtenerTodos();
    this.prodSrv.obtenerTodos().subscribe(datos => {
      this.products = datos;
    });
    // me traigo el carrito que está guardado dentro de nuestro servicio     
    // y piso en el constructor
    this.cestaDeLaCompra = this.prodSrv.cestaDeLaCompra;
    
  }       
  
  /** 29AGO ejemplo para agregar un item a la lista de productos
   * para simplificar el tema, se va a invocar con el constructor
  
   export class HomePage {
  private productos;
  private cantidad=0;
  constructor(private prodSrv: ProductoService) {
    let prod = new Producto();
    prod.id = "4";
    prod.cantidad = 3;
    prod.nombre = "led";
    prod.precio = 100;
    this.prodSrv.agregar(prod);
    this.productos = prodSrv.obtenerTodos();
  }
  */
 
  public sumaPrecios(): void {
    let pagar = this.prodSrv.getPrecioTotal();
   alert("Precio total a pagar es: $ " + pagar);
  }

}
