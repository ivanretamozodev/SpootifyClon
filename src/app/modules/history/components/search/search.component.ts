import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    @Output() callbackSearch: EventEmitter<string> = new EventEmitter<string>();
    src: string = '';

    constructor() {}

    ngOnInit(): void {}

    onSearch(search: string): void {
        this.callbackSearch.emit(search);
    }
}
