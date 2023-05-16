import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'hl',
})
export class HighlightedDirective {
  constructor() {}

  @Input('appHighlighted') isHighLighted = false;
  @HostBinding('class.highlighted')
  get highLightClass() {
    return this.isHighLighted;
  }

  @Output() toggleHighlight = new EventEmitter();

  mouseEvent(newIsHighlighted: boolean) {
    this.isHighLighted = newIsHighlighted;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  toggle() {
    this.isHighLighted = !this.isHighLighted;
  }

  @HostListener('mouseover', ['$event'])
  mouseOverEvent() {
    this.mouseEvent(true);
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeaveEvent() {
    this.mouseEvent(false);
  }
}
