import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductCategoryModel} from '../../model/ProductCategoryModel';
import {GenericService} from '../../service/genericService';

@Injectable()
export class ProductCategoryService extends GenericService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getProductCategories(): Observable<ProductCategoryModel[]> {
    return this.http.get<ProductCategoryModel[]>(this.getURL('/productCategory/getAll') );
  }

}
