import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.css']
})
export class RegisterProjectComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private project: ProjectService) { }


    icon:any = [];

  form = this.fb.group({
    title: ['', Validators.required],
    summary: ['', Validators.required],
    objective: ['', Validators.required],
    category: ['', Validators.required],
    files:['', Validators.required],
  });

  handleIcon(e:any):void{
    console.log(e.srcElement.files);
    const selectedFiles = e.srcElement.files[0];
    
    console.log(this.form.get('icon')?.value);
    
    this.form.get('icon')?.updateValueAndValidity(selectedFiles);

    
  }

  registerProject() {
    console.log(this.icon[0]);
    
    // const fd = new FormData();
    // fd.append("title", this.form.get('title')?.value,)
    // fd.append("summary", this.form.get('summary')?.value,)
    // fd.append("objective", this.form.get('objective')?.value,)
    // fd.append("category", this.form.get('category')?.value,)
    // fd.append("files",  this.form.get('icon')?.value)

    return this.project.register(
      this.form.value 
      ).subscribe(
        (response) => {

          if (response !== undefined) {
            console.log("insira mensagem de sucesso");

          }
        },
        (error) => {

          
          if (error.error !== undefined) {
            console.log(error.error);

            console.log("insira mensagem de erro");

          }
        })

  }


  ngOnInit(): void {
  }

}
