import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HomeComponent } from "../home/home.component";
import { User } from "../_models/User";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  private fileUrl = "/src/app/home";

  constructor(private http: HttpClient) {}

  User(user: User): Observable<HomeComponent> {
    return this.http.post<HomeComponent>(this.fileUrl + "login", user);
  }
  getProjects(): Observable<HomeComponent[]> {
    return this.http.get<HomeComponent[]>(this.fileUrl);
  }
}
