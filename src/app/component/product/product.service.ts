import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../../model/Product';
import {GenericService} from '../../service/genericService';

@Injectable()
export class ProductService extends GenericService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getProductsByCategory( id: number ) {
    return this.http.get<ProductModel[]>(this.getURL(`/product/getByCategoryId?id=${id}`));
  }

}
