import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button, p[fundoAmarelo]'
  //coloque o nome da tag que quer q seja aplicado
})
export class FundoAmareloDirective {

  constructor(
    private _elementeRef: ElementRef,
    private _renderer: Renderer2
    ) {
    //console.log(this._elementeRef);
    //this._elementeRef.nativeElement.style.backgroundColor='yellow';
    this._renderer.setStyle(
      this._elementeRef.nativeElement,
      'background-color',
      'yellow'
      );
   }

}
