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
  it('should return the sum of multiple comma-separated numbers', () => {
    expect(service.add("1,2,3,4,5")).toEqual(15);
  });
  it('should return the sum of numbers separated by commas and new lines', () => {
    expect(service.add("1\n2,3")).toEqual(6);
  });
  it('should return the sum of numbers with a custom delimiter', () => {
    expect(service.add("//;\n1;2")).toEqual(3);
  });
  
  
  
  
});
