import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ProjectRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { RegisterProjectComponent } from './pages/register-project/register-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list'; 




@NgModule({
  declarations: [
    ProjectsComponent,
    RegisterProjectComponent,
    EditProjectComponent,
    ListProjectComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProjectRoutingModule,
    RouterModule,
    MatGridListModule
  ]
})
export class ProjectsModule { }
