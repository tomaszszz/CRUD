import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, ContentRoutingModule],
})
export class ContentModule {}
