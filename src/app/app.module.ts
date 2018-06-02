import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextMaskModule } from 'angular2-text-mask';
import { RouterModule } from '@angular/router';
import { InscricaoComponent } from './inscricao/inscricao.component';
import { HomepageComponent } from './homepage/homepage.component';
import { rotas } from './app.routes';
import { ConfirmarInscricaoComponent } from './confirmar-inscricao/confirmar-inscricao.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InscricaoComponent,
    HomepageComponent,
    ConfirmarInscricaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      }
    ]),
    ModalModule.forRoot(),
    rotas,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
