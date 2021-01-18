import { TestBed, async, inject } from '@angular/core/testing';

import { NotSeedGivenGuard } from './not-seed-given.guard';

describe('NotSeedGivenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotSeedGivenGuard]
    });
  });

  it('should ...', inject([NotSeedGivenGuard], (guard: NotSeedGivenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
