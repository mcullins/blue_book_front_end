import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'twoDecimal'
})

export class TwoDecimalPipe implements PipeTransform {

    transform(value): any {
        var dec = parseFloat(value).toFixed(2);
        var neg = dec.toString().replace(/^0+/i, ' ');
        var na = neg.replace(/^NaN+/i, 'n/a');

        return na;
                

    }
}