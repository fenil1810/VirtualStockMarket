"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
    }
    Add(model1) {
        let headers = new http_1.Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        let options = new http_1.RequestOptions({ headers: headers });
        delete model1["id"];
        //var model2 = { "Email": "fenilshah1@gmail.com", "Password": "Fenil@123", "ConfirmPassword": "Fenil@123" };
        let body = JSON.stringify(model1);
        return this.http.post('/CreateUser', body, options).toPromise()
            .catch(this.handleErrorPromise);
    }
    extractArray(res, showprogress = true) {
        let data = res.json();
        return data || [];
    }
    handleErrorPromise(error) {
        try {
            error = JSON.parse(error._body);
        }
        catch (e) {
        }
        let errMsg = error.errorMessage
            ? error.errorMessage : error.message ? error.message : error._body
            ? error._body : error.status
            ? `${error.status} - ${error.statusText}` : 'unknown server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
};
RegisterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=UserInformationsService.js.map