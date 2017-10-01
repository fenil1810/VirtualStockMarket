import { Component, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { AppComponent } from '../app.component';
import { UserInformations } from '../Models/UserInformations';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

    students;

    constructor(private http: Http) { }
    Add(model1) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        delete model1["id"];
        //var model2 = { "Email": "fenilshah1@gmail.com", "Password": "Fenil@123", "ConfirmPassword": "Fenil@123" };
        let body = JSON.stringify(model1);
        return this.http.post('/CreateUser', body,
            options).toPromise()
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

