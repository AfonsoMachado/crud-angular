import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

// Diretiva estrutural
@Directive({
  selector: '[myFor]' // Seletor da diretiva
})
export class ForDirective implements OnInit {

  // Capturando o que vem depois da palavra em 
  @Input('myForEm') numbers: number[]

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }

  ngOnInit(): void {
    for (const number of this.numbers) {
      // Criando um template para cada numero
      // O valor implicito é o numero sendo percorrido no for
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
    console.log(this.numbers)
  }

}
