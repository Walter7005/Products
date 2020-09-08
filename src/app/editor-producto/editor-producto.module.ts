import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditorProductoPageRoutingModule } from './editor-producto-routing.module';

import { EditorProductoPage } from './editor-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditorProductoPageRoutingModule
  ],
  declarations: [EditorProductoPage]
})
export class EditorProductoPageModule {}
