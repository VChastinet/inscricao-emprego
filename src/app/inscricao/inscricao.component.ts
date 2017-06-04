import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InscricaoService } from "./inscricao.service";
import { InscricaoForm } from "./inscricao.form";
import { Mask } from "../shared/mask";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ExperienciaProfissionalForm } from "../shared/experiencia-profissional/experiencia-profissional.form";
import { ExperienciaProfissional } from "../shared/experiencia-profissional/experiencia-profissional";

@Component({
    selector: 'app-inscricao',
    templateUrl: './inscricao.component.html',
    styleUrls: ['./inscricao.component.css'],
    providers: [InscricaoService]
})
export class InscricaoComponent {

    private router: Router;
    private inscricaoForm: InscricaoForm;
    private exProfissionalForm: ExperienciaProfissionalForm;
    private inscricaoService: InscricaoService;
    private cpfMask = Mask.getCpf();
    private telefoneMask = Mask.getTelefone();
    private celularMask = Mask.getCelular();
    private dateMask = Mask.getData();
    private experienciasProfissionais: Array<ExperienciaProfissional> = [];
    private modalReferencia: NgbModalRef;

    public constructor(router: Router,
                       inscricaoService: InscricaoService,
                       private modalService: NgbModal) {
        this.router = router;
        this.inscricaoService = inscricaoService;
        this.inscricaoForm = new InscricaoForm();
        this.exProfissionalForm = new ExperienciaProfissionalForm();
    }

    public inscrever() {
        if (!this.inscricaoForm.isValid()) {
            return this.inscricaoForm.markAllAsTouched();
        }
    }

    public openModal(content) {
        this.modalReferencia = this.modalService.open(content, {size: 'lg'});
    }

    public salvarExpProfissional() {
        if (!this.exProfissionalForm.isValid()) {
            return this.exProfissionalForm.markAllAsTouched();
        }

        let expProfissional = new ExperienciaProfissional(
            this.exProfissionalForm.get('cargo').value,
            this.exProfissionalForm.get('descricao').value,
            this.exProfissionalForm.get('dataInicio').value,
            this.exProfissionalForm.get('dataFim').value,
            this.exProfissionalForm.get('trabalhoAtual').value
        );

        this.experienciasProfissionais.push(expProfissional);

        this.inscricaoForm.get('experienciaProfissional').setValue(this.experienciasProfissionais.length + " item(s) selecionado(s).");
        this.modalReferencia.dismiss();
    }
}
