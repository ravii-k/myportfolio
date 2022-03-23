import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutes } from "./app.routing";
import { NavComponent } from "./nav/nav.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ContactComponent } from "./contact/contact.component";
import { ProjectService } from "./_services/project.service";
import { AlertifyService } from "./_services/alertify.service";
import { ThankYouComponent } from "./thank-you/thank-you.component";
import { PreventUnsavedChanges } from "./_gaurds/prevent-unsaved-changes.guard";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContactComponent,
    ThankYouComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutes,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [AlertifyService, ProjectService, PreventUnsavedChanges],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    library.add(faGithub, faLinkedin, faEnvelope);
  }
}
