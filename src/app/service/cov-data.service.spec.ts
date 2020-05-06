import { TestBed } from '@angular/core/testing';

import { CovDataService } from './cov-data.service';

describe('CovDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovDataService = TestBed.get(CovDataService);
    expect(service).toBeTruthy();
  });
});
