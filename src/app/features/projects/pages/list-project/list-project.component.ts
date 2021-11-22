import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  constructor(private project: ProjectService) { }

  ngOnInit(): void {
    this.getProject();
    
  }
  projects:any = [{}];
  ProjetoId = this.projects[0]._id;

  getProject(){
    this.project.display().subscribe(objetos =>{ this.projects.push(objetos)
    this.projects = this.projects[1].message;    
    console.log(this.projects);
    });    
  }


}
