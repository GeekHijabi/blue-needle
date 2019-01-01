import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: SidebarComponent,
  // },
  {
    path: '',
    component: ProductsComponent

  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
