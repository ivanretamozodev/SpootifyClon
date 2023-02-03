import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TracksService {
    private readonly URL = environment.API_URL;

    constructor(private http: HttpClient) {}

    getAllTracks$(): Observable<any> {
        return this.http.get(`${this.URL}/tracks`).pipe(map((dataRaw: any) => dataRaw.data));
    }

    getRandomTracks$(): Observable<any> {
        return this.http
            .get(`${this.URL}/tracks`)
            .pipe(map((dataRaw: any) => dataRaw.data.reverse()));
    }
}
