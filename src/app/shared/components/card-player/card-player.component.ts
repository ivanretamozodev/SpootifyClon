import { Component, Input, OnInit } from '@angular/core';
import { TrackInterface } from '../../../core/interfaces/tracks.interface';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track! : TrackInterface
  constructor() { }

  ngOnInit(): void {
  }

}
