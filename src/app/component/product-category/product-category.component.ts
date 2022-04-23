import { Component, OnInit } from '@angular/core';
import {ProductCategoryService} from './product-category.service';
import {ProductCategoryModel} from '../../model/ProductCategoryModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
  providers: [ProductCategoryService]
})
export class ProductCategoryComponent implements OnInit {

  public productCategories: Array<ProductCategoryModel>;

  constructor ( private productCategoryService: ProductCategoryService, private router: Router) { }

  ngOnInit() {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.productCategoryService.getProductCategories().subscribe(res => {
      this.productCategories = res;
    });
  }
}
