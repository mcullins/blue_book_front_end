import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
   
    transform(value: number, character: string): string {
        if (value != null) {
        return value.toString().replace(character, ' ');
    }
    }
}