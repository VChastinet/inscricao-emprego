import {Data} from "../data";
export class Oportunidade {

    private codigo: number;
    private titulo: string;
    private descricao: string;
    private dataInicio: Data;
    private dataFinal: Data;
    private qtdVagas: number = 0;

    public constructor(
        codigo: number,
        titulo: string,
        descricao: string,
        dataInicio: Data,
        dataFinal: Data,
        qtdVagas?: number,
    ) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFinal = dataFinal;
        this.qtdVagas = qtdVagas;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getDataInicio(): Data {
        return this.dataInicio;
    }

    public getDataFinal(): Data {
        return this.dataFinal;
    }

    public getQtdVagas(): number {
        return this.qtdVagas;
    }
}