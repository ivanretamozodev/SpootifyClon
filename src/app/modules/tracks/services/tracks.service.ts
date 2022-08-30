import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';
import { TrackInterface } from '../../../core/interfaces/tracks.interface';

@Injectable({
    providedIn: 'root'
})
export class TracksService {
    dataTracksTrending: Observable<TrackInterface[]> = of([]);
    constructor() {
        const { data }: any = (dataRaw as any).default;
        this.dataTracksTrending = of(data);
    }
}
