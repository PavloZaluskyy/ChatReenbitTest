import { TestBed } from '@angular/core/testing';

import { APIAnswerService } from './apianswer.service';

describe('APIAnswerService', () => {
  let service: APIAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
