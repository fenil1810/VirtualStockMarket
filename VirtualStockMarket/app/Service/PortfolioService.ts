import { Component, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { AppComponent } from '../app.component';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Portfolio } from '../Models/Portfolio';



@Injectable()
export class PortfolioService {

    constructor(private http: Http) { }

    LoadData(): Promise<Portfolio[]> {
        return this.http.get('/Portfolio')
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }
    protected extractArray(res: Response, showprogress: boolean = true) {
        let data = res.json();

        return data || [];
    }

    protected handleErrorPromise(error: any): Promise<void> {
        try {
            error = JSON.parse(error._body);
        } catch (e) {
        }

        let errMsg = error.errorMessage
            ? error.errorMessage : error.message ? error.message : error._body
                ? error._body : error.status
                    ? `${error.status} - ${error.statusText}` : 'unknown server error';

        console.error(errMsg);
        return Promise.reject(errMsg);
    }


}
