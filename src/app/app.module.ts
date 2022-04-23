import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarNavigationComponent } from './component/sidebar-navigation/sidebar-navigation.component';
import {MatListModule} from '@angular/material/list';
import { ProductCategoryComponent } from './component/product-category/product-category.component';
import { ProductComponent } from './component/product/product.component';
import {MatCardModule} from '@angular/material/card';
import { PersonalDataDialogComponent } from './component/personal-data-dialog/personal-data-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { DesignPreviewComponent } from './component/design-preview/design-preview.component';
import { CartComponent } from './component/cart/cart.component';
import {ProductOperationService} from './service/product-operation.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarNavigationComponent,
    ProductCategoryComponent,
    ProductComponent,
    PersonalDataDialogComponent,
    DesignPreviewComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-AR'},
  {provide: MAT_DATE_LOCALE, useValue: 'es-AR'},
  ProductOperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
