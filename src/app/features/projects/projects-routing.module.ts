import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { RegisterProjectComponent } from './pages/register-project/register-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';

import { AdminGuard } from 'src/app/core/guards/admin.guard';


const routes: Routes = [
  {
    path: "",
    component: ProjectsComponent,
    children: [
      {
        path:"",
        redirectTo:'list',
        pathMatch: 'full'
      
      },
      {
        path:'list',
        component:ListProjectComponent,
      },
      {
        path:'edit/:id',
        component:EditProjectComponent,
        canActivate: [AdminGuard]
      },
      {
        path:'register',
        component:RegisterProjectComponent,
        canActivate: [AdminGuard]
      },
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
