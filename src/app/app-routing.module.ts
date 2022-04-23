import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {ProductCategoryComponent} from './component/product-category/product-category.component';
import { HomeComponent } from './home/home.component';
import {ProductComponent} from './component/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'appComponent', component: AppComponent },
  { path: 'productCategoryComponent', component: ProductCategoryComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ProductComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
