import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyCMHafCCqdagyTbAMwvN9eqZZD-w9afGuM'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
