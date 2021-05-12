import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { ExpirienceComponent } from './expirience/expirience.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ExpirienceComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
