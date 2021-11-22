import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})



export class EditProjectComponent implements OnInit {
  files:any = []
  form = this.fb.group({
    title: [''],
    summary: [''],
    objective: [''],
    category: [''],
    files: [''],
    
  });

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private project: ProjectService) { }


  onChange(event: any) {
    const a =  [event.target.files[0]];
    this.files.push(a)
    console.log(this.files);
      

  }


  editProject() {
    
    const form = new FormData();
    
    form.append('icon', this.files[0][0]);
    form.append('banner', this.files[1][0]);

    const files = {'files': [ form.get("icon"), form.get("banner") ]}

    let a:any = [
      this.form.get("title")?.value,
      this.form.get("summary")?.value,
      this.form.get("objective")?.value,
      this.form.get("category")?.value,
      files
    ]
    console.log(a);
    
    return this.project.edit(
      this.route.snapshot.paramMap.get('id'),
      this.form.get("title"),
      this.form.get("summary"),
      this.form.get("objective"),
      this.form.get("category"),
      form.get("files")
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
