import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {
  private cestaDeLaCompra: Array<Producto> = [{
    "id": "0",
    "nombre": "La cesta está vacía",
    "precio": 0,  // quiero poner la suma
    "cantidad": 0, // esta es la cantidad que tengo en la cesta
    "imagen": "../../assets/Carrito dummy.png"
}]

 
  constructor() { }
  
  public pasaTodalaLista() {
    return this.cestaDeLaCompra; 
  }

  public pasaCantidadCesta() {
    let sumaDeCantidades= 0;
    for (let cesta of this.cestaDeLaCompra) {
      sumaDeCantidades = sumaDeCantidades + cesta.cantidad;
    }
    return sumaDeCantidades;
    }  // utilizamos let y no var porque var es una variable global

  public agregaaCesta(prod: Producto) {
    // todo esto porque me da error que el array no tiene valores
    let loPopeo = new Producto();
    loPopeo = this.cestaDeLaCompra.pop();
    if (loPopeo.cantidad > 0) {
      this.cestaDeLaCompra.push(loPopeo);  
    }
    let elProducto = new Producto();
    prod.cantidad--;
    elProducto.id = prod.id;
    elProducto.nombre = prod.nombre;
    elProducto.precio = prod.precio;
    elProducto.imagen = prod.imagen;
    elProducto.cantidad = 1;
    return this.cestaDeLaCompra.push(elProducto); 
  }
}
