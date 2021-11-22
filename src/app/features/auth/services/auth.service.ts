import * as moment from 'moment';
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

  private authenticate(result: any) {
    const expiresAt = moment().add(result.expiresIn, 'second');
    localStorage.setItem('authorization', result);
    localStorage.setItem('access_token', result.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  isAuthenticated() {
    if (localStorage.getItem('authorization') !== null) {
      return true
    } else {
      localStorage.getItem('authorization')
      return false
    }
  }

  isAdmin() {
    const token = localStorage.getItem("authorization")!;

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
