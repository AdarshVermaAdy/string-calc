import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    const formattedNumbers = numbers.replace(/\n/g, ",");
    const numArray = formattedNumbers.split(",");
    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
  
  
}
