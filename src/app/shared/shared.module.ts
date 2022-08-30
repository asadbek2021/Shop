import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    CommonModule,
    FormsModule,
  ],
  exports:[
    CommonModule,
    HighlightDirective,
    BoldDirective,
    OrderPipe,
    FormsModule,
  ]
})
export class SharedModule { }
