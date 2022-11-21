import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashPasswordPipe } from '../hash-password.pipe';

@NgModule({
  declarations: [HashPasswordPipe],
  imports: [CommonModule],
  exports: [HashPasswordPipe],
})
export class SharedModule {}
