import { TestBed, inject } from '@angular/core/testing';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [RegisterService]
  });
});

  it('should be created', inject([RegisterService] ,(service: RegisterService) => {
    // const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  }));
});
