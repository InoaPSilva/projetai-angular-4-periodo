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
    private router: Router,
    private project: ProjectService) { }


    icon:any = [];
    banner:any = [];

  form = this.fb.group({
    title: ['', Validators.required],
    summary: ['', Validators.required],
    objective: ['', Validators.required],
    category: ['', Validators.required],
    icon: ['', Validators.required],
    banner: ['', Validators.required]
  });

  handleIcon(e:any):void{
    console.log(e.srcElement.files);
    const selectedFiles = e.srcElement.files;
    
    this.icon = selectedFiles;
    
  }
  handleBanner(e:any):void{
    console.log(e.srcElement.files);
    const selectedFiles = e.srcElement.files;
    
    this.banner = selectedFiles;

    
  }

  registerProject() {
    console.log(this.icon[0], this.banner[0]);
    
    return this.project.register(
      this.form.controls['title'].value,
      this.form.controls['summary'].value,
      this.form.controls['objective'].value,
      this.form.controls['category'].value,
      this.icon[0],
      this.banner[0]
      ).subscribe(
        (response) => {

          if (response !== undefined) {
            console.log("insira mensagem de sucesso");

          }
        },
        (error) => {

          
          if (error.error !== undefined) {
            console.log(error.error.text);

            console.log("insira mensagem de erro");

          }
        })

  }


  ngOnInit(): void {
  }

}
