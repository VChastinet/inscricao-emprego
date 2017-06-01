import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InscricaoService } from "./inscricao.service";
import { InscricaoForm } from "./inscricao.form";
import { Mask } from "../shared/mask";

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
    private cpfMask = Mask.getCpf();
    private telefoneMask = Mask.getTelefone();
    private celularMask = Mask.getCelular();

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
