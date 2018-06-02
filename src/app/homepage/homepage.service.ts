import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomepageService {

    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    public getOportunidades(): Observable<any> {
        const resourceUrl = 'http://127.0.0.1:8000/api/oportunidade/listar';

        return this.http.get(resourceUrl);
    }
}
