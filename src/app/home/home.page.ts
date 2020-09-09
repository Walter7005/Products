import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';
import { AlertController, LoadingController } from '@ionic/angular';

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
  private nuevoProducto = new Producto();

  private cestaDeLaCompra: Array<Producto> = [];
  
  constructor(private prodSrv: ProductoService, private alContrl:AlertController, private loading:LoadingController) { }
  
  public async ngOnInit() {

    const loading = await this.loading.create();
    loading.present();
    
    // lo primero que hacemos es invocar el métdodo de obtenerTodos
    // eliminado el 2020SEP05 ... this.products = this.prodSrv.obtenerTodos();
    this.prodSrv.obtenerTodos().subscribe(datos => {
      this.products = datos;
      loading.dismiss();
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
  public meteProducto() {
    this.prodSrv.addProducto(this.nuevoProducto).subscribe(nuevo => console.log(nuevo)); 
  }
  
  public async sumaPrecios(): void {

    let pagar = this.prodSrv.getPrecioTotal();
    let cuerpo = "";
    for (let prod of this.prodSrv.cestaDeLaCompra) {
      cuerpo = cuerpo + prod.nombre + ": " + prod.precio + " <br/>";
    }
  
    const cuerpoAlerta = {
      header: "Título",
      subHeader: "subtítulo",
      message: cuerpo+"Precio total " + pagar,
      buttons: ["ok","Cancel"]
    }
    const alert = await this.alContrl.create(cuerpoAlerta);
    await alert.present();
    
   
  }

}
