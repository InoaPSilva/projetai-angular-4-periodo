import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private project: ProjectService) { }



  form = this.fb.group({
    title: ['', Validators.required],
    summary: ['', Validators.required],
    objective: ['', Validators.required],
    category: ['', Validators.required],
    icon: ['', Validators.required],
    banner: ['', Validators.required]
  });


  editProject() {
    const files = {
      icon: this.form.controls['icon'].value,
      banner: this.form.controls['banner'].value 
    }
    // Files input missing

    return this.project.edit(
      this.form.controls['title'].value,
      this.form.controls['summary'].value,
      this.form.controls['objective'].value,
      this.form.controls['category'].value,
      files
      ).subscribe(
        (response) => {

          if (response !== undefined) {
            console.log("insira mensagem de sucesso");

          }
        },
        (error) => {

          if (error.error !== undefined) {
            console.log("insira mensagem de erro");

          }
        })

  }


  ngOnInit(): void {
  }

}
