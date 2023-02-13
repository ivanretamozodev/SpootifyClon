import { Component, Input, OnInit } from '@angular/core';
import { MediaService } from '@shared/services/media.service';
import { TrackInterface } from '@core/interfaces/tracks.interface';

@Component({
    selector: 'app-card-player',
    templateUrl: './card-player.component.html',
    styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
    @Input() mode: 'small' | 'big' = 'small';
    @Input() track!: TrackInterface;
    constructor(private _mediaService: MediaService) {}

    ngOnInit(): void {}

    sendTrackToMediaPlayer(track: TrackInterface) {
        this._mediaService.trackInfo$.next(track);
    }
}
