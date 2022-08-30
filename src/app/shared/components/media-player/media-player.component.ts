import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackInterface } from '@core/interfaces/tracks.interface';
import { MediaService } from '../../services/media.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
    mockCover: TrackInterface = {
        _id: 13,
        name: 'the wall',
        album: 'the wall',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/The_Wall_Cover.svg/800px-The_Wall_Cover.svg.png',
        url: ''
    };

    listOfObservers$: Array<Subscription> = [];

    constructor(private _mediaService: MediaService) {}

    ngOnInit(): void {
        const observer1$: Subscription = this._mediaService.callbackMedia.subscribe(
            (track: TrackInterface) => (this.mockCover = track)
        );

        this.listOfObservers$ = [observer1$];
    }

    ngOnDestroy(): void {
        this.listOfObservers$.forEach((observer) => observer.unsubscribe());
    }
}
