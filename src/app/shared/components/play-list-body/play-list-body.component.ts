import { Component, OnInit, Input } from '@angular/core';
import { TrackInterface } from '@core/interfaces/tracks.interface';

@Component({
    selector: 'app-play-list-body',
    templateUrl: './play-list-body.component.html',
    styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
    @Input() tracks: TrackInterface[] = [];
    optionSort: { property: string | null; order: string } = { property: null, order: 'asc' };

    constructor() {}

    ngOnInit(): void {}

    changeSort(property: string): void {
        const { order } = this.optionSort;
        this.optionSort = {
            property,
            order: order === 'asc' ? 'desc' : 'asc'
        };
    }
}
