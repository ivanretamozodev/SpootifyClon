import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
    constructor(private host: ElementRef) {}
    @HostListener('error') handleError(): void {
        const elNative = this.host.nativeElement;
        elNative.src = '../../../assets/no_album.png';
    }
}
