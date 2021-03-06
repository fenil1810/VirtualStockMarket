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
require("rxjs/add/operator/switchMap");
const router_1 = require("@angular/router");
const PortfolioService_1 = require("../Service/PortfolioService");
const common_1 = require("@angular/common");
let PortfolioComponent = class PortfolioComponent {
    constructor(portfolioService, _router, location) {
        this.portfolioService = portfolioService;
        this._router = _router;
        this.portfolio = [];
        this.refresh();
        this.location = location;
    }
    refresh() {
        this.portfolioService.LoadData().then(data => {
            this.portfolio = data;
        });
    }
};
PortfolioComponent = __decorate([
    core_1.Component({
        selector: 'portfolio',
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        template: `<div>
    <h2>Stock Data</h2>
       <table class="table">
            <tr>
                <th>Stock Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Your BidPrice</th>
            </tr>
            <tr *ngFor="let pf of portfolio">
                <td>{{pf.StockName}}</td>
                <td>{{pf.ShareQuantity}}</td>
                <td>{{pf.TotalPrice}}</td>
                <td>{{pf.BidPrice}}</td>
            </tr>
        </table>
</div>`,
    }),
    __metadata("design:paramtypes", [PortfolioService_1.PortfolioService, router_1.Router, common_1.Location])
], PortfolioComponent);
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=PortfolioComponent.js.map