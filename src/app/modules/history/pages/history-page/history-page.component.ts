import { Component, OnInit } from '@angular/core';
import { TrackInterface } from '@core/interfaces/tracks.interface';
import { Observable, of } from 'rxjs';
import { SearchService } from '@modules/history/services/search.service';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
    listResults$: Observable<any> = of([]);
    constructor(private _searchService: SearchService) {}

    ngOnInit(): void {}

    receiveSearch(search: string): void {
        this.listResults$ = this._searchService.tracksSearch$(search);
    }
}
