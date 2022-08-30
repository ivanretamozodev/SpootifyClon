import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackInterface } from '../../../../core/interfaces/tracks.interface';
import * as dataRaw from '../../../../data/tracks.json';
import { TracksService } from '../../services/tracks.service';

@Component({
    selector: 'app-tracks-page',
    templateUrl: './tracks-page.component.html',
    styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
    TrendingTracks: Array<TrackInterface> = [];
    RandomTracks: Array<TrackInterface> = [];
    listObservers$: Array<Subscription> = [];

    constructor(private _tracksService: TracksService) {}

    ngOnInit(): void {
        const observerTrending$ = this._tracksService.dataTracksTrending.subscribe(
            (tracks) => (this.TrendingTracks = tracks)
        );
        this.listObservers$ = [observerTrending$];
    }
    ngOnDestroy(): void {
        this.listObservers$.forEach((observer) => observer.unsubscribe());
    }
}
