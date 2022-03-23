import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ThankYouComponent } from "./thank-you/thank-you.component";
import { PreventUnsavedChanges } from "./_gaurds/prevent-unsaved-changes.guard";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  { path: "home", component: HomeComponent },
  {
    path: "contact",
    component: ContactComponent,
    canDeactivate: [PreventUnsavedChanges],
  },
  { path: "thankYou", component: ThankYouComponent },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
];

export const AppRoutes = RouterModule.forChild(routes);
