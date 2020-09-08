import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorProductoPage } from './editor-producto.page';

const routes: Routes = [
  {
    path: '',
    component: EditorProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorProductoPageRoutingModule {}
