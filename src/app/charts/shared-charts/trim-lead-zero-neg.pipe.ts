import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'trimLeadZeroNeg'
})

export class TrimLeadZeroNegPipe implements PipeTransform {

    transform(value: number): string {
        return value.toString().replace(/^-0+/i, '-');

    }
}