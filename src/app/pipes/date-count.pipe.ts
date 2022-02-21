import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: Date, args?: any): Date {
    let today:Date = new Date();
    return today;
  }

}
