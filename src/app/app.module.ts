import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VapulusSnippetModule  } from 'node_modules/ng-vapulus-snippet'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VapulusSnippetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
