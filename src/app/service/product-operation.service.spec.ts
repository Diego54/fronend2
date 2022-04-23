import { TestBed, inject } from '@angular/core/testing';

import { ProductOperationService } from './product-operation.service';

describe('ProductOperationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductOperationService]
    });
  });

  it('should be created', inject([ProductOperationService], (service: ProductOperationService) => {
    expect(service).toBeTruthy();
  }));
});
