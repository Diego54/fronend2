import {ParentEntity} from './ParentEntity';
import {PersonModel} from './Person';
import {ItemModel} from './Item';

export class PurchaseModel extends ParentEntity {
  public date: Date;
  public owner: PersonModel;
  public items: ItemModel[];

  constructor(person: PersonModel, items: ItemModel[]) {
    super();
    this.owner = person;
    this.date = new Date();
    this.items = items;
  }
}
