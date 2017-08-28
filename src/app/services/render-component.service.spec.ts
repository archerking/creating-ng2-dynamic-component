/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RenderComponentService } from './render-component.service';

describe('RenderComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenderComponentService]
    });
  });

  it('should ...', inject([RenderComponentService], (service: RenderComponentService) => {
    expect(service).toBeTruthy();
  }));
});
