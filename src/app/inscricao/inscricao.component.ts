import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InscricaoService } from "./inscricao.service";
import { InscricaoForm } from "./inscricao.form";

@Component({
    selector: 'app-inscricao',
    templateUrl: './inscricao.component.html',
    styleUrls: ['./inscricao.component.css'],
    providers: [InscricaoService]
})
export class InscricaoComponent {

    private router          : Router;
    private inscricaoForm   : InscricaoForm;
    private inscricaoService : InscricaoService;

    public constructor(
        router        : Router,
        inscricaoService: InscricaoService
    ) {
        this.router           = router;
        this.inscricaoService = inscricaoService;
        this.inscricaoForm    = new InscricaoForm();
    }

    public inscrever() {
        if (!this.inscricaoForm.isValid()) {
            return this.inscricaoForm.markAllAsTouched();
        }
    }
}
