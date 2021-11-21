import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.URL_API

  constructor(private http: HttpClient) { }

  authenticate(token: any) {

    localStorage.removeItem(token)
    localStorage.setItem('Authorization', token);
    return true;

  }

  isAuthenticated() {
    if (localStorage.getItem('Authorization') !== null) {
      return true
    } else {
      localStorage.getItem('Authorization')
      return false
    }
  }

  isAdmin() {
    const token = localStorage.getItem("Authorization")!;

    const head = new HttpHeaders({ 'authorization': token })

    return this.http.get(this.url + "/tokenTest", { headers: head })

  }


  login(email: any, password: any) {
    return this.http.post(this.url + "/user/login", { email, password })
      .pipe(take(1), tap((response) => {
        const dataToken = JSON.parse(JSON.stringify(response));

        this.authenticate(dataToken.token)

        return dataToken
      })
      )
  }

}
