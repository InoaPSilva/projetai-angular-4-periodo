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

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private project: ProjectService) { }


  editProject() {
    


    
    // return this.project.edit(
    //   this.route.snapshot.paramMap.get('id'),
    //   this.data.get("title"),
    //   this.data.get("summary"),
    //   this.data.get("objective"),
    //   this.data.get("category"),    
    //   this.data.get("files")
    //   ).subscribe(
    //   (response) => {
    //     console.log("func inside");

    //     if (response !== undefined) {
    //       console.log(response);

    //       console.log("insira mensagem de sucesso");

    //     }
    //   },
    //   (error) => {

    //     if (error.error !== undefined) {
    //       console.log(error.error.text);

    //       console.log("insira mensagem de erro");

    //     }
    //   })

  }


  ngOnInit(): void {
  }

}
