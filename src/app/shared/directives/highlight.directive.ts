import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('style.background') background: string = 'red';
  @HostListener('mouseover', ['$event.target'])
  onMouseOver(target: HTMLElement) {
    this.el.nativeElement.style.background = 'purple';
  }

  @HostListener('mouseout', ['$event.target'])
  onMouseOut(target: HTMLElement) {
    this.el.nativeElement.style.background = 'red';
  }

}
