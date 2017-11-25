import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';
import {AppRoutingModule} from "./app-routing.module";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import { AngularComponent } from './angular/angular.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "./user.service";
import {HttpClientModule} from "@angular/common/http";
import { HighlightDirective } from './highlight.directive';
import { MydatePipe } from './mydate.pipe';
import { LoginComponent } from './auth/login/login.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireAuth} from "angularfire2/auth";
import { RegisterComponent } from './auth/register/register.component';
import {AuthGuardService} from "./auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent,
    AngularComponent,
    HighlightDirective,
    MydatePipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatCheckboxModule,
    MatSnackBarModule
  ],
  providers: [UserService,  AngularFireAuth, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
