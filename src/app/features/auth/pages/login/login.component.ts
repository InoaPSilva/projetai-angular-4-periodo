import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.login();
  }


  //Login para o sistema do projetai, falta colocar formulario 
  login() {

    return this.auth.login("aa@a", "a").subscribe(
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

}

