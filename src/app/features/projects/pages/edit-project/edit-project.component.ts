import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})

export class EditProjectComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private project: ProjectService) { }
    
    files = {}


  form = this.fb.group({
    title: [''],
    summary: [''],
    objective: [''],
    category: [''],
    icon: [''],
    banner: ['']
  });

  fileChangeEvent(event: any): void {
    this.files = {
      icon: event.target.files[0],
      banner: event.target.files[1],
    }
  }

  editProject() {

    // Files input missing
    console.log(this.form.value);

    return this.project.edit(
      this.route.snapshot.paramMap.get('id'),
      this.form.controls['title'].value,
      this.form.controls['summary'].value,
      this.form.controls['objective'].value,
      this.form.controls['category'].value,
      this.files
    ).subscribe(
      (response) => {
        console.log("func inside");

        if (response !== undefined) {
          console.log(response);

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
