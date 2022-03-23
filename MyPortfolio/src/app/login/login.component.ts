import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { LoginService } from "../_services/login.service";
import { User } from "../_models/User";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor() {}
  ngOnInit(): void {}
  home() {
    if (
      this.email == "kashyap01212@gmail.com" &&
      this.password == "123456789"
    ) {
    }
  }
}
