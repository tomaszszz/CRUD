import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatePipe } from '../paginate.pipe';

@NgModule({
  declarations: [PaginatePipe],
  imports: [CommonModule],
  exports: [PaginatePipe],
})
export class SharedModule {}
