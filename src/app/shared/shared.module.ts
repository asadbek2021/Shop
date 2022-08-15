import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { BoldDirective } from './directives/bold.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    BoldDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[HighlightDirective, BoldDirective]
})
export class SharedModule { }
