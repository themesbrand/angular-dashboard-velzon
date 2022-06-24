import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appScrollable]",
  exportAs: "appScrollable"
})
export class ScrollableDirective {
  constructor(private elementRef: ElementRef) {}

  timeoutId : any
  @Input() scrollUnit!: number;

  private get element() {
    return this.elementRef.nativeElement;
  }

  get isOverflow() {
    return this.element.scrollWidth > this.element.clientWidth;
  }

  scroll(direction: number) {
    clearInterval(this.timeoutId)
    this.startTimer(direction)
  }

  endTimer () {
    clearInterval(this.timeoutId)
  }
  startTimer (direction: number) {
    this.timeoutId = setInterval(() => {
      this.element.scrollLeft += this.scrollUnit * direction;      
    }, 50);
  }

  get canScrollStart() {
    return this.element.scrollLeft > 0;
  }

  get canScrollEnd() {
    return this.element.scrollLeft + this.element.clientWidth != this.element.scrollWidth;
  }

  @HostListener("window:resize")
  onWindowResize() {} // required for update view when windows resized
}
