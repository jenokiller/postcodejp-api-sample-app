import { TestBed, inject } from '@angular/core/testing';

import { PostcodeService } from './postcode.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PostcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostcodeService]
    });
  });

  it('should be created', inject([PostcodeService], (service: PostcodeService) => {
    expect(service).toBeTruthy();
  }));
});
