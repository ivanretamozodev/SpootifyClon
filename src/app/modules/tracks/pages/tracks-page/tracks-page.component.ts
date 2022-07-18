import { Component, OnInit } from '@angular/core';
import { TrackInterface } from '../../../../core/interfaces/tracks.interface';
import * as dataRaw from "../../../../data/tracks.json";

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  mockTrackList : Array<TrackInterface> =[
   
  ]

  constructor() { }

  ngOnInit(): void {
    const {data} : any = (dataRaw as any).default
    this.mockTrackList = data
  }

}
