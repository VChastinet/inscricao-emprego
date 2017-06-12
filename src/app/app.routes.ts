
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscricaoComponent} from "./inscricao/inscricao.component";
import {ConfirmarInscricaoComponent} from "./confirmar-inscricao/confirmar-inscricao.component";

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'inscricao', component: InscricaoComponent},
    {path: 'confirmar-inscricao', component: ConfirmarInscricaoComponent},
];

export const rotas: ModuleWithProviders = RouterModule.forRoot(routes);