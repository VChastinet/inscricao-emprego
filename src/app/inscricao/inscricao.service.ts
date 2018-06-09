import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscricao } from './inscricao';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class InscricaoService {

    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    public inscrever(inscricao: Inscricao): Observable<any> {
        console.log('Inscricao', inscricao);
        const resourceUrl = 'http://127.0.0.1:8000/api/inscricao/inscrever';

        return this.http.post(resourceUrl, inscricao);
    }

    public confirmarInscricao(body: Object): Observable<any> {
        const resourceUrl = 'http://127.0.0.1:8000/api/inscricao/confirmar';

        return this.http.put(resourceUrl, body);
    }

}
