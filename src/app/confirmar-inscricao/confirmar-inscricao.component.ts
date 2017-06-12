import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-confirmar-inscricao',
    templateUrl: './confirmar-inscricao.component.html',
})
export class ConfirmarInscricaoComponent {

    private router: Router;

    public constructor(router: Router,
                       activedRoute: ActivatedRoute,
                       ) {
        this.router = router;
    }

}
