import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Data} from "../data";

export class ExperienciaProfissionalForm extends FormGroup{

    private errorMessages = {
        required: 'O campo %s é obrigatório.',
        format: '%s inválido.'
    };

    private data: Data = new Data;

    public constructor() {
        super({
            cargo: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            descricao: new FormControl('', Validators.compose([(control: FormGroup) => {
                return !control.value ? { 'required': true } : null;
            }])),
            dataInicio: new FormControl(null, Validators.compose([(control: FormGroup) => {
                return !control.value ? {'required': true} : null;
            }])),
            dataFim: new FormControl(null, Validators.compose([(control: FormGroup) => {
                return !control.value ? {'required': true} : null;
            }])),
            trabalhoAtual: new FormControl()
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
