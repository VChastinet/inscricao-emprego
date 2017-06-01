import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InscricaoService {

    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public inscrever(body): any {

        //return this.http.post();

    }

}
