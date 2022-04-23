import {Component, OnInit} from '@angular/core';
import {ItemModel} from '../../model/Item';
import {ProductOperationService} from '../../service/product-operation.service';
import {MatDialog,} from '@angular/material/dialog';
import {PersonalDataDialogComponent} from '../personal-data-dialog/personal-data-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: ItemModel[];
  totalProduct: number;
  quotation: number;

  constructor(public productOperationService: ProductOperationService,
              public dialog: MatDialog) { }


  ngOnInit() {
    this.cart = new Array<ItemModel> ();
    this.productOperationService.itemToAdd.subscribe((item: ItemModel) => {
      this.cart.push(item);
    });
  }

  deleteItem(item: ItemModel) {
    const cartUpdated = this.cart.filter(elem => elem !== item);
    this.cart = cartUpdated;
  }

  readUrl(event: any, item: ItemModel) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const stringFile: String = event.target.result.toString();
        item.design = stringFile.substring(stringFile.indexOf(',') + 1);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PersonalDataDialogComponent, {
      minWidth: '250px',
      data: { cart: this.cart }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openPreview(): void {
    const dialogRef = this.dialog.open(PersonalDataDialogComponent, {
      minWidth: '250px',
      data: { cart: this.cart }
    });
  }

}
