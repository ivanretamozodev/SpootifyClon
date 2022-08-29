import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

@NgModule({
    declarations: [AuthPageComponent],
    imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule]
})
export class AuthModule {}
