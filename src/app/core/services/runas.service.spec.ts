import { TestBed } from '@angular/core/testing';

import { RunasService } from './runas.service';

describe('RunasService', () => {
  let service: RunasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
