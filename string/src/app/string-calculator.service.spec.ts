import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return 0 for an empty string', () => {
    expect(service.add("")).toEqual(0);
  });
  it('should return the number itself for a single number', () => {
    expect(service.add("1")).toEqual(1);
  });
  it('should return the sum of two comma-separated numbers', () => {
    expect(service.add("1,5")).toEqual(6);
  });
  
});
