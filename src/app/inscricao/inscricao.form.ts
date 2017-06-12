import { FormControl, FormGroup, Validators } from '@angular/forms';

export class InscricaoForm extends FormGroup{

    private errorMessages = {
        formatFile: 'Todos os documentos anexados devem ser do formato PDF.',
        pattern: '%s contém valor inválido.',
        archiveLimit: 'Tamanho máximo 5MB.',
        required: 'O campo %s é obrigatório.',
        format: '%s inválido.',
        anexarArquivo: 'Anexe algum arquivo.'
    };

    private anexoName: string;

    public constructor() {
        super({
            nome: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            cpf: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            email: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            celular: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            telefone: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            habilidadeTecnica: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            link: new FormControl(),
            experienciaProfissional: new FormControl(),
            oportunidade: new FormControl()
        });
    }

    public isValid(): boolean {
        return this.valid;
    }

    public markAllAsTouched(): void {
        for (let controlName in this.controls) {
            this.get(controlName).markAsTouched();
        }
    }

    public getFirstErrorFrom(controlName: string, label: string): string {
        return this.errorMessages[Object.keys(this.get(controlName).errors)[0]];
    }

    public getAnexoName() {
        return this.anexoName;
    }

    public anexaDocumento(event) {
        let arquivo = event.target.files[0];
        let self = this;
        self.anexoName = arquivo.name;
    }
}
