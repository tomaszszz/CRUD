import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashPasswordPipe } from '../hash-password.pipe';
import { PaginatePipe } from '../paginate.pipe';

@NgModule({
  declarations: [HashPasswordPipe, PaginatePipe],
  imports: [CommonModule],
  exports: [HashPasswordPipe, PaginatePipe],
})
export class SharedModule {}
