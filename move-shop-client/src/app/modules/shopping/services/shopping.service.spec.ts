import { TestBed } from '@angular/core/testing';

import { ShoppingService } from './shopping.service';

describe('SearchService', () => {
  let service: ShoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
