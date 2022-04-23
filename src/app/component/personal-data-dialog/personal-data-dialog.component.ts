import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NativeDateAdapter} from '@angular/material/core';
import {PersonModel} from '../../model/Person';
import {PurchaseModel} from '../../model/Purchase';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-personal-data-dialog',
  templateUrl: './personal-data-dialog.component.html',
  styleUrls: ['./personal-data-dialog.component.css']
})
export class PersonalDataDialogComponent implements OnInit {

  person: PersonModel;
  constructor(
    public http: HttpClient,
    public dialogRef: MatDialogRef<PersonalDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClickSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const cart = this.data.cart;
    const purchase = new PurchaseModel(this.person, cart);
    console.log(JSON.stringify(purchase));
  }

  ngOnInit() {
    this.person = new PersonModel('', '', new Date, 0, '');
  }

}

export class MyDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getDay();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
    } else {
      return date.toDateString();
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}
