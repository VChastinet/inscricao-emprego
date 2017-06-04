import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InscricaoService } from "./inscricao.service";
import { InscricaoForm } from "./inscricao.form";
import { Mask } from "../shared/mask";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {ExperienciaProfissionalForm} from "../shared/experiencia-profissional/experiencia-profissional.form";

@Component({
    selector: 'app-inscricao',
    templateUrl: './inscricao.component.html',
    styleUrls: ['./inscricao.component.css'],
    providers: [InscricaoService]
})
export class InscricaoComponent {

    private router          : Router;
    private inscricaoForm   : InscricaoForm;
    private exProfissionalForm: ExperienciaProfissionalForm;
    private inscricaoService : InscricaoService;
    private cpfMask = Mask.getCpf();
    private telefoneMask = Mask.getTelefone();
    private celularMask = Mask.getCelular();
    private dateMask = Mask.getData();

    public constructor(
        router        : Router,
        inscricaoService: InscricaoService,
        private modalService: NgbModal
    ) {
        this.router           = router;
        this.inscricaoService = inscricaoService;
        this.inscricaoForm    = new InscricaoForm();
        this.exProfissionalForm = new ExperienciaProfissionalForm();
    }

    public inscrever() {
        if (!this.inscricaoForm.isValid()) {
            return this.inscricaoForm.markAllAsTouched();
        }
    }

    public openModal(content) {
        this.modalService.open(content, {size: 'lg'});
    }

    public salvarExpProfissional() {
        console.log("Entrou");
    }
}
