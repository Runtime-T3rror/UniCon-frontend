import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponentComponent } from './components/components/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
=======
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { TimetableComponent } from './components/timetable/timetable.component';

@NgModule({
  declarations: [AppComponent, TimetableComponent, SignUpComponent],
  imports: [BrowserModule, AppRoutingModule],
>>>>>>> origin/het
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
