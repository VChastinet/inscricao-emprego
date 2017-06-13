import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextMaskModule } from "angular2-text-mask";
import { RouterModule } from "@angular/router";
import { InscricaoComponent } from "./inscricao/inscricao.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NglModule } from 'ng-lightning/ng-lightning';
import { HomepageComponent } from "./homepage/homepage.component";
import { rotas } from "./app.routes";
import { ConfirmarInscricaoComponent } from "./confirmar-inscricao/confirmar-inscricao.component";
import { NgbdModalContent } from "./shared/modal/modal.component";
import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  declarations: [
    AppComponent,
    InscricaoComponent,
    HomepageComponent,
    ConfirmarInscricaoComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TextMaskModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      }
    ]),
    NgbModule.forRoot(),
    NglModule.forRoot(),
    rotas,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
