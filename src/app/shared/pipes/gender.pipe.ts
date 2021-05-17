import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  transform(value: string) {
    if(value === 'male'){
      return 'آقا'
    } else if(value === 'female') {
      return 'خانم'
    } else {
      return 'نامشخص'
    }
  }
}