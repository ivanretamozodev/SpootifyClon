import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
    declarations: [HistoryPageComponent, SearchComponent],
    imports: [CommonModule, HistoryRoutingModule, FormsModule, SharedModule]
})
export class HistoryModule {}
