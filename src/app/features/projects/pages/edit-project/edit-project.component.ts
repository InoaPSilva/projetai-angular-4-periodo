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
  icon: any = []
  banner: any = []
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


  handleIcon(event: any) {
    const a = event.target.files;
    this.icon = a;
    console.log(this.icon);
    this.FData.append('icon', this.icon[0]);

  }

  handleBanner(event: any) {
    const a = event.target.files;
    this.banner = a;
    console.log(this.banner);
    this.FData.append('banner', this.banner[0]);
    
  }

  editProject() {

    

    this.FData.append("title", this.form.get("title")?.value)
    this.FData.append("summary", this.form.get("summary")?.value)
    this.FData.append("objective", this.form.get("objective")?.value)
    this.FData.append("category", this.form.get("category")?.value)


    console.log();
    

    return this.project.edit(
      this.route.snapshot.paramMap.get('id'),
          this.FData.get("title"),
          this.FData.get("summary"),
          this.FData.get("objective"),
          this.FData.get("category"),
          this.FData.get("icon"),
          this.FData.get("banner"),

          ).subscribe(
      (response) => {
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
