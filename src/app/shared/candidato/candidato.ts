import {HabilidadeTecnica} from "../habilidade-tecnica/habilidade-tecnica";
import {ExperienciaProfissional} from "../experiencia-profissional/experiencia-profissional";
export class Candidato {
    private nome: string;
    private cpf: string;
    private email: string;
    private celular: string;
    private telefone: string;
    private link: string;
    private habilidadesTecnicas: Array<HabilidadeTecnica>;
    private experienciasProfissionais: Array<ExperienciaProfissional>;
    private anexo: string;

    public constructor(nome: string,
                       cpf: string,
                       email: string,
                       celular: string,
                       telefone: string,
                       link: string,
                       habilidadesTecnicas: Array<HabilidadeTecnica>,
                       experienciasProfissionais: Array<ExperienciaProfissional>,
                       anexo: string
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.celular = celular;
        this.telefone = telefone;
        this.link = link;
        this.habilidadesTecnicas = habilidadesTecnicas;
        this.experienciasProfissionais = experienciasProfissionais;
        this.anexo = anexo;
    }
}