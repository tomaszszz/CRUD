import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private currPage = 0;

  public nextPage(): number {
    return this.currPage;
  }

  public prevPage(): number {
    return this.currPage;
  }

  get currentPage() {
    return this.currPage;
  }

  constructor() {}
}
