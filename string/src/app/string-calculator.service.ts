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
  
    let delimiter = ",";
    let numberString = numbers;
  
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEndIndex);
      numberString = numbers.substring(delimiterEndIndex + 1);
    }
  
    const formattedNumbers = numberString.replace(/\n/g, delimiter);
    const numArray = formattedNumbers.split(delimiter);
    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
  
  
}
