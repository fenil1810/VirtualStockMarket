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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
let AppComponent = class AppComponent {
    constructor(_router, location) {
        this._router = _router;
        this.location = location;
    }
    NavigateToPortfolio() {
        this._router.navigate(['Portfolio']);
    }
    NavigateToTrade() {
        this._router.navigate(['Trade']);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //templateUrl: './Content/index.html'
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        template: ` <div>
        <h1>Menu</h1>
    <a (click)="NavigateToPortfolio()">Portfolio</a>
    <a (click)="NavigateToTrade()">Trade</a>
    <router-outlet></router-outlet>
</div> `
    }),
    __metadata("design:paramtypes", [router_1.Router, common_1.Location])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map