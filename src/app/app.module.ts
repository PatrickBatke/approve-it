import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import * as $ from 'jquery';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HeaderComponent } from "./shared/components/header/header.component";

import { DataCenterComponent } from './modules/settings/data-center/data-center.component';

import { ProjectCenterModule } from './modules/project-center/project-center.module';

import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { LoginComponent } from "./modules/authentication/login/login.component";
import { VerifyComponent } from './modules/authentication/verify/verify.component';
import { ForgotComponent } from './modules/authentication/forgot/forgot.component';
import { PWResetComponent } from './modules/authentication/pwreset/pwreset.component';

import { AuthService } from './auth.service';
import { CheckmailComponent } from './modules/authentication/checkmail/checkmail.component';
import { CheckverificationmailComponent } from './modules/authentication/checkverificationmail/checkverificationmail.component';
import { CommenterComponent } from './modules/commenter/commenter.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderComponent,
    DataCenterComponent,
    AuthenticationComponent,
    RegisterComponent,
    VerifyComponent,
    ForgotComponent,
    PWResetComponent,
    CheckmailComponent,
    CheckverificationmailComponent,
    CommenterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ProjectCenterModule,
    PdfViewerModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
