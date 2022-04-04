import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appComplete]',
})
export class CompleteDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.textDecoration = 'line-through';
    }
}
