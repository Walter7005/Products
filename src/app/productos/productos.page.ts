import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor( private unObjetodeActiveteRoute:ActivatedRoute) { }

  ngOnInit() {
    this.unObjetodeActiveteRoute.paramMap.subscribe(paramMap => {
      alert(paramMap.get("id"));
    })
   }
}