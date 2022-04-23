import { Injectable } from '@angular/core';
import {ItemModel} from '../model/Item';
import {Subject} from 'rxjs';
import {ProductModel} from '../model/Product';

@Injectable()
export class ProductOperationService {


  itemToAdd = new Subject<ItemModel>();

  constructor() { }

  public addItem(item: ItemModel) {
    this.itemToAdd.next(Object.assign(new ItemModel(new ProductModel()), item));
  }
}
