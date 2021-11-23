import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void { }
  form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  //Login para o sistema do projetai, falta colocar formulario
  login() {
    return this.auth
      .login(
        this.form.controls['login'].value,
        this.form.controls['password'].value
      )
      .subscribe(
        (response) => {
          if (response !== undefined) {
            console.log(response);
            
            console.log('insira mensagem de sucesso');
          }
        },
        (error) => {
          if (error.error.text !== undefined) {
            console.log('insira mensagem de erro');
          }
        }
      );
  }
}
