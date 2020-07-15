import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]' // Seletor da diretiva
})

// Diretiva da cor RED
export class RedDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b'
  }

}
