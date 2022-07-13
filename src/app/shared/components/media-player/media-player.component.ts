import { Component, OnInit } from '@angular/core';
import { TrackInterface } from '@core/interfaces/tracks.interface';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover : TrackInterface ={
    _id:  13,
    name: "the wall",
    album: "the wall",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/The_Wall_Cover.svg/800px-The_Wall_Cover.svg.png",
    url:   "https//localhost:"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
