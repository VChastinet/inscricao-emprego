import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from "rxjs";
import {Inscricao} from "./inscricao";

@Injectable()
export class InscricaoService {

    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public inscrever(inscricao: Inscricao): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const resourceUrl = "http://127.0.0.1:8000/inscricao/inscrever";

        return this.http.post(resourceUrl, inscricao, options);
    }

    public confirmarInscricao(body: Object): Observable<any> {
        const resourceUrl = "http://127.0.0.1:8000/inscricao/confirmar";

        return this.http.put(resourceUrl, body);
    }

}
