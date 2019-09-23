/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MinesweepService } from './minesweep.service';

describe('MinesweepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinesweepService]
    });
  });

  it('should ...', inject([MinesweepService], (service: MinesweepService) => {
    expect(service).toBeTruthy();
  }));
});
