import { TestBed } from '@angular/core/testing';

import { GetmoedasService } from './getmoedas.service';

describe('GetmoedasService', () => {
  let service: GetmoedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetmoedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
