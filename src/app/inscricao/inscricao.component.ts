import {Component, EventEmitter, OnInit, TemplateRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InscricaoService } from './inscricao.service';
import { InscricaoForm } from './inscricao.form';
import { Mask } from '../shared/mask';
import { ExperienciaProfissionalForm } from '../shared/experiencia-profissional/experiencia-profissional.form';
import { ExperienciaProfissional } from '../shared/experiencia-profissional/experiencia-profissional';
import { HabilidadeTecnicaForm } from '../shared/habilidade-tecnica/habilidade-tecnica.form';
import { HabilidadeTecnica } from '../shared/habilidade-tecnica/habilidade-tecnica';
import { isUndefined } from 'util';
import { Inscricao } from './inscricao';
import { OportunidadeInscricao } from '../shared/oportunidade/oportunidade-inscricao';
import { Candidato } from '../shared/candidato/candidato';
import { ConfirmarInscricaoForm } from '../confirmar-inscricao/confirmar-inscricao.form';
import { NgbdModalContent } from '../shared/modal/modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-inscricao',
    templateUrl: './inscricao.component.html',
    styleUrls: ['./inscricao.component.css'],
    providers: [InscricaoService],
    outputs: ['inscricaoFormEvent']
})
export class InscricaoComponent implements OnInit {

    private router: Router;
    private inscricaoForm: InscricaoForm;
    private exProfissionalForm: ExperienciaProfissionalForm;
    private habTecnicaForm: HabilidadeTecnicaForm;
    private confirmarInscricaoForm: ConfirmarInscricaoForm;
    private inscricaoService: InscricaoService;
    private cpfMask = Mask.getCpf();
    private telefoneMask = Mask.getTelefone();
    private celularMask = Mask.getCelular();
    private dateMask = Mask.getData();
    private experienciasProfissionais: Array<ExperienciaProfissional> = [];
    private habilidadesTecnicas: Array<HabilidadeTecnica> = [];
    private modalReferencia: BsModalRef;
    private oportunidadeId: any;
    private inscricaoId: number;
    private inscricaoFormEvent: EventEmitter<InscricaoForm> = new EventEmitter();

    public constructor(
      router: Router,
      inscricaoService: InscricaoService,
      activedRoute: ActivatedRoute,
      private modalService: BsModalService
    ) {
        this.router = router;
        this.inscricaoService = inscricaoService;
        this.inscricaoForm = new InscricaoForm();
        this.exProfissionalForm = new ExperienciaProfissionalForm();
        this.habTecnicaForm = new HabilidadeTecnicaForm();
        this.confirmarInscricaoForm = new ConfirmarInscricaoForm();
        activedRoute.queryParamMap.subscribe(params => {
            this.oportunidadeId = params.get('od');
        });
    }

    ngOnInit() {
        this.inscricaoFormEvent.emit(this.inscricaoForm);
    }

    public inscrever() {
        if (!this.inscricaoForm.isValid()) {
            return this.inscricaoForm.markAllAsTouched();
        }

        let inscricao = new Inscricao(
            new Candidato(
                this.inscricaoForm.get('nome').value,
                this.inscricaoForm.get('cpf').value,
                this.inscricaoForm.get('email').value,
                this.inscricaoForm.get('celular').value,
                this.inscricaoForm.get('telefone').value,
                this.inscricaoForm.get('link').value,
                this.habilidadesTecnicas,
                this.experienciasProfissionais,
                this.inscricaoForm.getDataAnexo(),
            ),
            new OportunidadeInscricao(
                this.oportunidadeId
            )
        );

        this.inscricaoService.inscrever(inscricao).subscribe(
            data => {
                let inscricao = data;

                this.confirmarInscricaoForm.get('inscricaoId').setValue(inscricao);
                this.inscricaoId = inscricao;
            },
            erro => {
                !isUndefined(erro['message']) ? this.exibirMensagemDeErro(erro['message']) : null;
            }
        );
    }

    public selecionarDocumento(event, control) {
        this.inscricaoForm.anexaDocumento(event, control);
    }

    public openModal(template: TemplateRef<any>) {
        this.modalReferencia = this.modalService.show(template);
    }

    public validarMsgHabTecnica(descricao: string) {
        const jaFoiInserido = this.habilidadesTecnicas.filter(control => {
            return control.getDescricao().trim() === descricao.trim();
        }).length;

        if (jaFoiInserido) {
            alert('Habilidade técnica já inserida.');
            return true;
        }

        if (!descricao) {
            this.habTecnicaForm.markAllAsTouched();
            return true;
        }
    }

    public addHabTecnica() {
        let descricao = this.habTecnicaForm.get('descricao').value;
        let msg = this.validarMsgHabTecnica(descricao);

        if (msg) { return; }

        let habTecnica = new HabilidadeTecnica(
            descricao
        );

        this.habilidadesTecnicas.push(habTecnica);
        this.inscricaoForm.get('habilidadeTecnica').setValue(this.habilidadesTecnicas.length + ' item(s) selecionado(s).');
    }

    removeHabTecnica(habTecnica: HabilidadeTecnica) {
        this.habilidadesTecnicas = this.habilidadesTecnicas.filter(_pill => _pill !== habTecnica);
        this.inscricaoForm.get('habilidadeTecnica').setValue(this.habilidadesTecnicas.length + ' item(s) selecionado(s).');
    }

    public salvarHabTecnica() {
        if (this.habilidadesTecnicas.length <= 0) {
            this.habTecnicaForm.get('descricao').setErrors({click: true});
            return this.habTecnicaForm.markAllAsTouched();
        }

        this.modalReferencia.hide();
    }

    public salvarExpProfissional() {
        if (!this.exProfissionalForm.isValid()) {
            return this.exProfissionalForm.markAllAsTouched();
        }

        const expProfissional = new ExperienciaProfissional(
            this.exProfissionalForm.get('cargo').value,
            this.exProfissionalForm.get('descricao').value,
            this.exProfissionalForm.get('dataInicio').value,
            this.exProfissionalForm.get('dataFim').value,
            this.exProfissionalForm.get('trabalhoAtual').value
        );

        this.experienciasProfissionais.push(expProfissional);

        this.inscricaoForm.get('experienciaProfissional').setValue(this.experienciasProfissionais.length + ' item(s) selecionado(s).');
        this.modalReferencia.hide();
    }

    public confirmar() {
        if (!this.confirmarInscricaoForm.isValid()) {
            return this.confirmarInscricaoForm.markAllAsTouched();
        }

        let body = {
          'inscricao': {
              'id': this.inscricaoId
          },
          'codigoConfirmacao': this.confirmarInscricaoForm.get('codigoConfirmacao').value
        };

        this.inscricaoService.confirmarInscricao(body).subscribe(
            data => {
                this.router.navigateByUrl('/confirmar-inscricao');
            },
            erro => {
                !isUndefined(erro.json()['message']) ? this.exibirMensagemDeErro(erro.json()['message']) : null;
            }
        )
    }

    public exibirMensagemDeErro(mensagem: string){
        let modalRef = this.modalService.show(NgbdModalContent);
        // modalRef.componentInstance.title = 'Aviso';
        // modalRef.componentInstance.body = mensagem;
    }
}
