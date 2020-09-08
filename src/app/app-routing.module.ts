import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [{
      path: "",
      loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      
    },
    {
      path: ":id",
      loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      
    }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'editor-producto',
    children: [{
      path: "",
      loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
      path: ":id",
      loadChildren: () => import('./editor-producto/editor-producto.module').then( m => m.EditorProductoPageModule)
    }
    ] // loadChildren: () => import('./editor-producto/editor-producto.module').then( m => m.EditorProductoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
