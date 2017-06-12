export class HabilidadeTecnica {

    private descricao: string;

    public constructor(
        descricao: string,
    ) {
        this.descricao = descricao;
    }

    public getDescricao(): string {
        return this.descricao;
    }
}
