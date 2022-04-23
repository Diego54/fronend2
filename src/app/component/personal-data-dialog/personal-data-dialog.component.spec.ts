import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataDialogComponent } from './personal-data-dialog.component';

describe('PersonalDataDialogComponent', () => {
  let component: PersonalDataDialogComponent;
  let fixture: ComponentFixture<PersonalDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
