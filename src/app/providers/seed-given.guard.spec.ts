import { TestBed, async, inject } from '@angular/core/testing';

import { SeedGivenGuard } from './seed-given.guard';

describe('SeedGivenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeedGivenGuard]
    });
  });

  it('should ...', inject([SeedGivenGuard], (guard: SeedGivenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
