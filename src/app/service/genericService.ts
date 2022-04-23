import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class GenericService {
  baseURL = 'http://localhost:8080/';
  constructor(public http: HttpClient) { }

  getURL( path: string) {
    return this.baseURL + path;
  }
}
