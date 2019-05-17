import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from "./shared/components/header/header.component";

import { AuthenticationComponent } from "./modules/authentication/authentication.component";
import { RegisterComponent } from "./modules/authentication/register/register.component";
import { LoginComponent } from "./modules/authentication/login/login.component";
import { VerifyComponent } from './modules/authentication/verify/verify.component';
import { ForgotComponent } from './modules/authentication/forgot/forgot.component';
import { PWResetComponent } from './modules/authentication/pwreset/pwreset.component';
import { CheckmailComponent } from './modules/authentication/checkmail/checkmail.component';
import { CheckverificationmailComponent } from './modules/authentication/checkverificationmail/checkverificationmail.component';

import { DataCenterComponent } from "./modules/settings/data-center/data-center.component";
import { ProjectOverviewComponent } from './modules/project-center/project-overview/project-overview.component';
import { ProjectSingleComponent } from './modules/project-center/project-single/project-single.component';
import { ProjectCreateComponent } from './modules/project-center/project-create/project-create.component';
import { ProjectSearchComponent } from './modules/project-center/project-search/project-search.component';

import { CommenterComponent } from "./modules/commenter/commenter.component";

const routes: Routes = [
  { path: "", component: AuthenticationComponent },
  {
    path: "auth",
    component: AuthenticationComponent,
    children: [
      { path: "register", component: RegisterComponent },
      { path: "verify", component: VerifyComponent },
      { path: "login", component: LoginComponent },
      { path: "reset/:token/:email", component: PWResetComponent },
      { path: "checkmail/:email", component: CheckmailComponent },
      { path: "checkverificationmail/:email", component: CheckverificationmailComponent },
      { path: "forgot", component: ForgotComponent }
    ]
  },
  {
    path: "project",
    component: HeaderComponent,
    children: [
      { path: "project-overview", component: ProjectOverviewComponent },
      {
        path: "project-single/:id",
        component: ProjectSingleComponent,
      },
      { path: "project-create", component: ProjectCreateComponent },
      { path: "commenter/:id", component: CommenterComponent },
      { path: "project-search", component: ProjectSearchComponent }
    ]
  },
  { path: "data-center", component: DataCenterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
