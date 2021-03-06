import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuestsComponent } from './guests.component';

import { ListGuestComponent } from './pages/list-guest/list-guest.component'; 
import { EditGuestComponent } from './pages/edit-guest/edit-guest.component';
import { RegisterGuestComponent } from './pages/register-guest/register-guest.component';

import { AdminGuard } from 'src/app/core/guards/admin.guard';

const routes: Routes = [
  {
    path: "",
    component: GuestsComponent,
    children: [
      {
        path:"",
        redirectTo:'list',
        pathMatch: 'full'
      
      },
      {
        path:'list',
        component:ListGuestComponent,
      },
      {
        path:'edit',
        component:EditGuestComponent,
        canActivate: [AdminGuard]
      },
      {
        path:'register',
        component:RegisterGuestComponent,
        canActivate: [AdminGuard]

      },
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
