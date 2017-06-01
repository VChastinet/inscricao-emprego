import { FormControl, FormGroup, Validators } from '@angular/forms';

export class InscricaoForm extends FormGroup{

    private errorMessages = {
        required: 'O campo %s é obrigatório.',
        format: '%s inválido.'
    };

    public constructor() {
        super({
            nome: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            cpf: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            email: new FormControl(),
            celular: new FormControl(),
            telefone: new FormControl(),
            habilidadeTecnica: new FormControl(),
            link: new FormControl(),
            experienciaProfissional: new FormControl(),
            oportunidade: new FormControl(),
            anexo: new FormControl()
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
}
