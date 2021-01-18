import { TestBed } from '@angular/core/testing';

import { TangleService } from './tangle.service';

describe('TangleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TangleService = TestBed.get(TangleService);
    expect(service).toBeTruthy();
  });
});
