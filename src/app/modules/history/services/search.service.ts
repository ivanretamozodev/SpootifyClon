import { TrackResponse } from './../../../core/interfaces/trackResponse.interface';
import { TrackInterface } from '@core/interfaces/tracks.interface';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private readonly API_URL: string = environment.API_URL;
    constructor(private _httpClient: HttpClient) {}

    tracksSearch$(search: string): Observable<TrackInterface> {
        return this._httpClient.get<TrackResponse>(`${this.API_URL}/tracks?src=${search}`).pipe(
            map(({ data }) => {
                return data;
            })
        );
    }
}
