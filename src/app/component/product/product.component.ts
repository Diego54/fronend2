import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs';
import {ProductModel} from '../../model/Product';
import {ProductService} from './product.service';
import {ItemModel} from '../../model/Item';
import {ProductOperationService} from '../../service/product-operation.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  amount: number;
  categoryId: number;
  products: ItemModel[];
  constructor(public snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private productService: ProductService,
              private productOperationService: ProductOperationService) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params['id']))
      .subscribe(params => {
        this.categoryId = params['id'];
        this.loadCategories(params['id']);
      });
  }

  private loadCategories(id: number): void {
    this.productService.getProductsByCategory(id).subscribe((res: ProductModel[]) => {
      let emptyItems: Array<ItemModel>;
      emptyItems = res.map((prod: ProductModel) => {
        return new ItemModel(prod);
      });
      this.products = emptyItems;
    });
  }

  addItem(item: ItemModel) {
    if (item.amount > 0) {
      this.productOperationService.addItem(item);
    } else {
      this.openSnackBar('Debe ingresar una cantidad mayor a cero.');
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

}
