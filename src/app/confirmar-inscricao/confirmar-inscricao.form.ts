import { FormControl, FormGroup, Validators } from '@angular/forms';

export class ConfirmarInscricaoForm extends FormGroup{

    private errorMessages = {
        pattern: '%s contém valor inválido.',
        required: 'O campo %s é obrigatório.',
    };


    public constructor() {
        super({
            inscricaoId: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            codigoConfirmacao: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }]))
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
