import {Component, OnInit} from '@angular/core';
import {HomepageService} from "./homepage.service";
import {Oportunidade} from "../shared/oportunidade/oportunidade";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    providers: [HomepageService]
})
export class HomepageComponent {
    private homepageService: HomepageService;
    private resultadosPesquisa: Array<Oportunidade> = [];

    public constructor(
        homepageService: HomepageService
    ) {
        this.homepageService = homepageService;
        this.homepageService.getOportunidades().subscribe(
            sucess => {
              sucess.map(control => {
                   let resultadoFormatado = new Oportunidade(
                        control['idOportunidade'],
                        control['titulo'],
                        control['descricao'],
                        control['periodoFinal'],
                        control['periodoInicial'],
                        control['qtdVagas']
                   );
                    this.resultadosPesquisa.push(resultadoFormatado);
                });
            },
            error => {
                console.log("error", error);
            }
        );
    }
}
