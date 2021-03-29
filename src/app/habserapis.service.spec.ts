import { TestBed } from '@angular/core/testing';

import { HabserapisService } from './habserapis.service';

describe('HabserapisService', () => {
  let service: HabserapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabserapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
