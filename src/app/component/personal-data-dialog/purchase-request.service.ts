import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from '../../service/genericService';
import {PurchaseModel} from '../../model/Purchase';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class PurchaseRequestService extends GenericService {

  constructor(http: HttpClient, public snackBar: MatSnackBar) {
    super(http);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  public requestPurchase( purchase: PurchaseModel) {
    return this.http.post(this.getURL(`/purchase/request-operation`), JSON.stringify(purchase))
      .subscribe(
        res => {
          this.openSnackBar('Solicitud exitosa. A la brevedad nos comunicaremos con usted para ultimar detalles');
        },
        err => {
          this.openSnackBar('Sucedio un error generando la solicitud');
        }
      );
  }

}
