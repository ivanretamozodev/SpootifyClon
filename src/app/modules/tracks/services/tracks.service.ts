import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TrackInterface } from '../../../core/interfaces/tracks.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TracksService {
    private readonly URL = environment.apiKey;

    constructor(private http: HttpClient) {}

    //return all tracks from api
    getAllTracks$(): Observable<any> {
        return this.http.get(`${this.URL}/tracks`).pipe(
            map(({ data }: any) => {
                return data;
            })
        );
    }

    //return all tracks reverse(only for practices)

    getRandomTracks$(): Observable<any> {
        return this.http.get(`${this.URL}/tracks`).pipe(
            map(({ data }: any) => {
                return data.reverse();
            })
        );
    }
}
