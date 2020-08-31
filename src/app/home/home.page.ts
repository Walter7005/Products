import { Component, OnInit, ɵCompiler_compileModuleAsync__POST_R3__ } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ListaCompraService } from '../services/lista-compra.service';

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
  private cantidadMyCesta = 0; // esto es la cantidad de cosas en la cesta
  private myCesta;
  // al constructor le vamos a inyectar la dependencia private prodSrv:ProductoService
  // lo tenemos que hacer en las dos páginas home.page.ts y productos.page.ts
  constructor(private prodSrv: ProductoService, private listaSrv: ListaCompraService) { }
  
  ngOnInit() {
    this.cantidadMyCesta = this.listaSrv.pasaCantidadCesta();
    // lo primero que hacemos es invocar el métdodo de obtenerTodos
    this.products = this.prodSrv.obtenerTodos();
    this.myCesta = this.listaSrv.pasaTodalaLista();
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
}
