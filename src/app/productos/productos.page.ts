import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';
// import { ListaCompraService } from '../services/lista-compra.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private product = new Producto(); // esto hay que inicializarlo porque hay mucho código asincrónico

  // private lista;
  //  private cantidadMyCesta: number; esto es la cantidad de cosas en la cesta

  // al constructor le vamos a inyectar la dependencia private prodSrv:ProductoService
  // lo tenemos que hacer en las dos páginas home.page.ts y productos.page.ts
  // como acá ya teníamos  
  //    private unObjetodeActiveteRoute: ActivatedRoute
  //  le chantamos una coma y seguimos, esto nos genera la línea de import

 
  constructor( private unObjetodeActiveteRoute:ActivatedRoute, 
    private prodSrv: ProductoService) { }

  ngOnInit() {
    this.unObjetodeActiveteRoute.paramMap.subscribe(
      paramMap => {
        this.prodSrv.obtenerPorID(paramMap.get("id"))
          .subscribe(datos => {
          this.product = datos;
        });         
      // esta parte de la del código es asíncrono, y se puede ejecutar en cualquier momento
      // solo se ejecuta en cuanto resuelve la suscripcion
      // paramap es un objeto observador dentro del objeto ActivetedRoute 
        // como a partir de 2020SEP05 hay dos suscribe encadenados es necesario inicializar 
      // OTRA COSA: presiona control antes de pasar con el ratón te amplia ayudas
      });
  }
  
  public agregaaCesta(): void {
    // 200902.3 esta es la funcion que va a llamar el botón de agregar a cesta
    // hay que modificar un poco el servicio prodSrv 
    //    allí vamos a generar otra lista, el profe la llama carrito,
    //    yo mantengo solo el nombre cestaDeLaCompra
    this.prodSrv.cestaDeLaCompra.push(this.product);
   }
  
}