import { ParentEntity } from './ParentEntity';
import {ProductCategoryModel} from './ProductCategoryModel';

export class ProductModel extends ParentEntity {

  category: ProductCategoryModel;

  name: string;

  price: number;

  width: number;

  height: number;
}
