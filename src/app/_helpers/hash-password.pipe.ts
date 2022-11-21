import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashPassword',
})
export class HashPasswordPipe implements PipeTransform {
  transform(value: string, char: string): string {
    return char.repeat(value.length);
  }
}
