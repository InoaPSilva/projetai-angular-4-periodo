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
    localStorage.setItem('Authorization',token);
    return true;

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
