import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-editor-producto',
  templateUrl: './editor-producto.page.html',
  styleUrls: ['./editor-producto.page.scss'],
})
export class EditorProductoPage implements OnInit {
  private product = new Producto(); 
  
  constructor( private unObjetodeActiveteRoute:ActivatedRoute, 
    private prodSrv: ProductoService) { }

  ngOnInit() {
    this.unObjetodeActiveteRoute.paramMap.subscribe(
      paramMap => {
        this.prodSrv.obtenerPorID(paramMap.get("id"))
          .subscribe(datos => {
          this.product = datos;
        });         
     });
  }
  public modifProducto() {
    this.prodSrv.updateProducto(this.product).subscribe(modif => console.log(modif));
  }

  public meteProducto() {
    this.prodSrv.addProducto(this.product).subscribe(nuevo => console.log(nuevo)); 
  }
  
  public borrarItem(): void { this.prodSrv.borrarUno(this.product).subscribe(borrado => console.log(borrado)); }
}