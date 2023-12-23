import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimetabledarkComponent } from './components/timetabledark/timetabledark.component';
import { TimetablelightComponent } from './components/timetablelight/timetablelight.component';

@NgModule({
  declarations: [
    AppComponent,
    TimetabledarkComponent,
    TimetablelightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
