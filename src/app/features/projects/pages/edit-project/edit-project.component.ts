import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})



export class EditProjectComponent implements OnInit {
  files: Set<File> = new Set();

  form = this.fb.group({
    title: [''],
    summary: [''],
    objective: [''],
    category: [''],
    files: [''],

  });
  FData = new FormData();

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private project: ProjectService) { }


  // onChange(e:any):void{
  //   console.log(e.srcElement.files);
  //   const selectedFiles = <FileList>e.srcElement.files;
    
  //   this.files = new Set();
  //   const fileNames = [];
  //   for(let i=0; i<selectedFiles.length; i++){
  //     fileNames.push(selectedFiles[i].name)
  //     this.files.add(selectedFiles[i])
  //   }
  // }

  editProject() {

    return this.project.edit(
      this.route.snapshot.paramMap.get('id'),
          this.form.get("summary")?.value,
          this.form.get("title")?.value,
          this.form.get("objective")?.value,
          this.form.get("category")?.value,
          
          ).subscribe(
      (response) => {
        if (response !== undefined) {
          console.log(response);

          console.log("insira mensagem de sucesso");

        }
      },
      (error) => {

        if (error.error.error !== undefined) {
          console.log(error.error);

          console.log("insira mensagem de erro");

        }
      })

  }


  ngOnInit(): void {
  }

}
