import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { BoldDirective } from './directives/bold.directive';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    BoldDirective,
    OrderPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[HighlightDirective, BoldDirective,OrderPipe]
})
export class SharedModule { }
