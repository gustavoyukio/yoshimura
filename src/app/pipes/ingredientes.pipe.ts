import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredientes'
})
export class IngredientesPipe implements PipeTransform {

  transform(value: any, arg1?: any, arg2?: any): any {

    value = value.split(" ")[0];
    arg1 = arg1.split(" ")[0];
    arg2 = arg2.split(" ")[0];
    
    let total = arg1/arg2;

    value = value * total;

    return value;

  }

}
