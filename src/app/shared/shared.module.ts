import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardPlayerComponent } from './components/card-player/card-player.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';




@NgModule({
  declarations: [
    CardPlayerComponent,
    GenericSectionComponent,
    MediaPlayerComponent,
    SideBarComponent,
    UserHeaderComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardPlayerComponent,
    GenericSectionComponent,
    MediaPlayerComponent,
    SideBarComponent,
    UserHeaderComponent,
  ]
})
export class SharedModule { }
