import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackInterface } from '../../../../core/interfaces/tracks.interface';
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
        const trendingObservable$: Subscription = this._tracksService
            .getAllTracks$()
            .subscribe((response: TrackInterface[]) => (this.TrendingTracks = response));

        const randomObservable$: Subscription = this._tracksService
            .getRandomTracks$()
            .subscribe((response: TrackInterface[]) => (this.RandomTracks = response));

        this.listObservers$ = [randomObservable$, trendingObservable$];
    }
    ngOnDestroy(): void {
        this.listObservers$.forEach((observable) => observable.unsubscribe());
    }
}
