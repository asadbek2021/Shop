import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  @Input() config: {'font-style':'italic' | 'normal' | 'unset', 'font-weight': string} = {'font-style':'normal', 'font-weight': '400'};

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight',this.config['font-weight'])
    this.renderer.setStyle(this.el.nativeElement, 'font-style',this.config['font-style'])
  }
}
