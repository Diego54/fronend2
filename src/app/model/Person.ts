export class PersonModel {
  public firstName: string;
  public lastName: string;
  public birthdate: Date;
  public cuit: number;
  public email: string;

  constructor(firstName: string, lastName: string, birthdate: Date, cuit: number, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.cuit = cuit;
    this.email = email;
  }
}
