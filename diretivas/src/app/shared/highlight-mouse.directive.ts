import { Directive, HostListener, HostBinding,
   ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
      ); */
      this._backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
      );*/
      this._backgroundColor = 'white';

  }

  //@HostBinding('style.backgroundColor') _backgroundColor?: string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this._backgroundColor;
  }

  //usando getters e setters

  private _backgroundColor?: string;
  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer2
  ) { }

}
