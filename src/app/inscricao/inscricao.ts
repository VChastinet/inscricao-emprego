import {OportunidadeInscricao} from "../shared/oportunidade/oportunidade-inscricao";
import {Candidato} from "../shared/candidato/candidato";

export class Inscricao {

    private candidato: Candidato;
    private oportunidade: OportunidadeInscricao;

    public constructor(candidato: Candidato, oportunidade: OportunidadeInscricao
    ) {
        this.candidato = candidato;
        this.oportunidade = oportunidade;
    }
}