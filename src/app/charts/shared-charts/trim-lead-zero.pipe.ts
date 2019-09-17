import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'trimLeadZero'
})

export class TrimLeadZeroPipe implements PipeTransform {

    transform(value: number): string {
         return value.toString().replace(/^0+/i, '');
        
    }
}