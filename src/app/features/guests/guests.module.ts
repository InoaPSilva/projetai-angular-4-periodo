import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GuestRoutingModule } from './guests-routing.module';

import { GuestsComponent } from './guests.component';
import { RegisterGuestComponent } from './pages/register-guest/register-guest.component';
import { EditGuestComponent } from './pages/edit-guest/edit-guest.component';
import { ListGuestComponent } from './pages/list-guest/list-guest.component';

@NgModule({
  declarations: [
    GuestsComponent,
    RegisterGuestComponent,
    EditGuestComponent,
    ListGuestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GuestRoutingModule
  ]
})
export class GuestsModule { }
