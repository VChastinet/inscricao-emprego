import { Data } from '../data';

export class ExperienciaProfissional {

    private cargo: string;
    private descricao: string;
    private dataInicio: Data;
    private dataFim: Data;
    private trabalhoAtual: boolean = false;

    public constructor(
        cargo: string,
        descricao: string,
        dataInicio: Data,
        dataFim: Data,
        trabalhoAtual?: boolean,
    ) {
        this.cargo = cargo;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.trabalhoAtual = trabalhoAtual;
    }

    public getCargo(): string {
        return this.cargo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getDataInicio(): Data {
        return this.dataInicio;
    }

    public getDataFim(): Data {
        return this.dataFim;
    }

    public getTrabalhoAtual(): boolean {
        return this.trabalhoAtual;
    }
}
