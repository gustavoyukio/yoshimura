import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porcentagens'
})
export class PorcentagensPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    args = args.split(" ")[0];

    let total = (value / args) * 100;
    return total + "%";
  }

}
