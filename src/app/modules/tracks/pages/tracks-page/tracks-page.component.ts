import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackInterface } from '@core/interfaces/tracks.interface';
import { TracksService } from '../../services/tracks.service';

@Component({
    selector: 'app-tracks-page',
    templateUrl: './tracks-page.component.html',
    styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
    trendingTracks: Array<TrackInterface> = [];
    randomTracks: Array<TrackInterface> = [];
    listObservers$: Array<Subscription> = [];

    constructor(private _tracksService: TracksService) {}

    ngOnInit(): void {
        this._tracksService
            .getAllTracks$()
            .subscribe((response: TrackInterface[]) => (this.trendingTracks = response));
        this._tracksService
            .getRandomTracks$()
            .subscribe((response: TrackInterface[]) => (this.randomTracks = response));
    }
    ngOnDestroy(): void {}
}
