import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MediaService {
    callbackMedia: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}
}
