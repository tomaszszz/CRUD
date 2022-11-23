import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate',
})
export class PaginatePipe implements PipeTransform {
  transform(data: any[] | null, entriesOnPage: number): any[] {
    let paginatedInput = [];

    if (data) {
      if (data.length >= entriesOnPage) {
        const pagesAmount = Math.ceil(data.length / entriesOnPage);
        for (let i = 0; i < data.length; i += entriesOnPage) {
          paginatedInput.push(data.slice(i, i + entriesOnPage));
        }
      }
    }
    return paginatedInput;
  }
}
