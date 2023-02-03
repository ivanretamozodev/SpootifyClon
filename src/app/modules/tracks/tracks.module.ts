import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { TracksRoutingModule } from './tracks-routing.module';

@NgModule({
    declarations: [TracksPageComponent],
    imports: [CommonModule, TracksRoutingModule, SharedModule],
    exports: [TracksPageComponent]
})
export class TracksModule {}
