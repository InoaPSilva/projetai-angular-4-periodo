import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = environment.URL_API

  constructor(private http: HttpClient) { }
  token = localStorage.getItem('authorization')!;

  head = new HttpHeaders({ 'authorization': this.token })

  register(
    title: any,
    summary: any,
    objective: any,
    category: any,
    icon: any,
    banner: any) {
    const fd = new FormData;
    fd.set("title", title)
    fd.set("summary", summary)
    fd.set("objective", objective)
    fd.set("category", category)
    fd.set("icon", icon)
    fd.set("banner", banner)
    
      // const fd ={title,
      //   summary,
      //   objective,
      //   category,
      //   files: [icon , banner]}
    return this.http.post(this.url + "/project/register",
      {
        fd
      }, {headers:this.head})
      .pipe(take(1))
  }

  edit(id: any, title: any, summary: any,
    objective: any, category: any) {
    console.log(id);

    return this.http.put(this.url + "/project/edit/" + id,
      {
        title,
        summary,
        objective,
        category,
      }, { headers: this.head })
      .pipe(take(1))
  }

  display() {
    return this.http.get(this.url + "/project").pipe(take(1));
  }

  deleteProject(id: any) {
    console.log("entrou");

    return this.http.delete(this.url + "/project/remove/" + id, { headers: this.head }).pipe(take(1)).subscribe(data => {
      console.log(data);
    });;
  }

}
