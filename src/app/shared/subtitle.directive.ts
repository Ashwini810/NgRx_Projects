import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSubtitle]'
})
export class SubtitleDirective {
  @HostListener('mouseenter') onMouseEnter() {
  alert('you have move over the p tag')
  }

  constructor() { }

}
