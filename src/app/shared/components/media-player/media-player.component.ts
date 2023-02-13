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
    listOfObservers$: Array<Subscription> = [];
    state: string = 'paused';
    percentage: number = 0;

    constructor(public _mediaService: MediaService) {}

    ngOnInit(): void {
        const observer1$: Subscription = this._mediaService.playerStatus$.subscribe(
            (status) => (this.state = status)
        );
        const observer2$: Subscription = this._mediaService.playerPercentage$.subscribe(
            (percentage) => (this.percentage = percentage)
        );

        this.listOfObservers$ = [observer1$, observer2$];
    }

    ngOnDestroy(): void {
        this.listOfObservers$.forEach((observer) => observer.unsubscribe());
    }
}
