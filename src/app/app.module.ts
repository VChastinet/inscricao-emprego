import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextMaskModule } from "angular2-text-mask";
import { RouterModule } from "@angular/router";
import { InscricaoComponent } from "./inscricao/inscricao.component";

@NgModule({
  declarations: [
    AppComponent,
    InscricaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TextMaskModule,
    RouterModule.forRoot([
      {
        path: '',
        component: InscricaoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
