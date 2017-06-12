import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class HomepageService {

    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public getOportunidades(): Observable<any> {
        const resourceUrl = "http://127.0.0.1:8000/oportunidade/listar";

        return this.http.get(resourceUrl);
    }
}
