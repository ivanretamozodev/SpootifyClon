import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener( 'error' ) handleError(): void{
    const elNative = this.host.nativeElement
    elNative.src = '../../../assets/no_album.png'
  }

  constructor(private host: ElementRef) {
    console.log(host);
    
   }

}
