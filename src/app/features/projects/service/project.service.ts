import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = environment.URL_API

  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

  register(title: any,
    summary: any,
    objective: any,
    category: any,
    files: any) {
      return this.http.post(this.url + "/project/register",
        {
          title,
          summary,
          objective,
          category,
          files
        })
        .pipe(take(1))
  }

  edit(title: any,
    summary: any,
    objective: any,
    category: any,
    files: any) {
      return this.http.put(this.url + "/project/edit/" + this.route.snapshot.paramMap.get('_id'),
        {
          title,
          summary,
          objective,
          category,
          files
        })
        .pipe(take(1))
  }

  display(){
    return this.http.get(this.url+"/project").pipe(take(1));
  }

}
