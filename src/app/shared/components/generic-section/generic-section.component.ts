import { Component, Input, OnInit } from '@angular/core';
import { TrackInterface } from '@core/interfaces/tracks.interface';

@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.css']
})
export class GenericSectionComponent implements OnInit {

  @Input() title: string = ""
  @Input() mode: "small" | "big" = "big"
  @Input() dataTracks: Array<TrackInterface> = []

  constructor() { }

  ngOnInit(): void {
  }

}
