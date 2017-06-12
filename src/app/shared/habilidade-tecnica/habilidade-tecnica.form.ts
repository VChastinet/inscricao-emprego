import { FormControl, FormGroup, Validators } from '@angular/forms';

export class HabilidadeTecnicaForm extends FormGroup{

    private errorMessages = {
        required: 'O campo %s é obrigatório.',
        click: 'O campo %s é obrigatório. Clique em adicionar.',
        pattern: '%s contém valor inválido.',
    };

    public constructor() {
        super({
            descricao: new FormControl('', Validators.compose([(control: FormGroup) => {
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
