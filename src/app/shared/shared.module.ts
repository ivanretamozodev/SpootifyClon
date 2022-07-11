import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';



@NgModule({
  declarations: [
    SideBarComponent,
    UserHeaderComponent,
    MediaPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SharedModule { }
