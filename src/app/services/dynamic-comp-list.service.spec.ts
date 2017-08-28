/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DynamicCompListService } from './dynamic-comp-list.service';

describe('DynamicCompListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicCompListService]
    });
  });

  it('should ...', inject([DynamicCompListService], (service: DynamicCompListService) => {
    expect(service).toBeTruthy();
  }));
});
