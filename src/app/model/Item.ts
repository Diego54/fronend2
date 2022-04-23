import {ParentEntity} from './ParentEntity';
import {ProductModel} from './Product';
import {PurchaseModel} from './Purchase';

export class ItemModel extends ParentEntity {
   product: ProductModel;
   amount: number;
   design: String;

  constructor(product: ProductModel) {
    super();
    this.amount = 0;
    this.product = product;
  }

  addOne() { // without type info
    console.log('sumo uno');
    this.amount ++;
  }

  subOne() {
    console.log('resto uno');
    this.amount = Math.max( 0 , (this.amount - 1) );
  }
}
