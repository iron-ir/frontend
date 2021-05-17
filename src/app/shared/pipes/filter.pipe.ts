import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any, query: string, attr: string){
    if(value.length < 1 || query === '') {
      return value;
    }
    let newValue = []
    for(let item of value) {
      if(item[attr].includes(query)){
        newValue.push(item);
      }
    }
    return newValue;
  }
}