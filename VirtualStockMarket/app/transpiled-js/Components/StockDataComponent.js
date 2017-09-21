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
const StockDataService_1 = require("../Service/StockDataService");
const common_1 = require("@angular/common");
let StockDataComponent = class StockDataComponent {
    constructor(stockdataService, _router, location) {
        this.stockdataService = stockdataService;
        this._router = _router;
        this.stockdata = [];
        this.refresh();
        this.location = location;
    }
    refresh() {
        this.stockdataService.LoadData().then(data => {
            this.stockdata = data;
        });
    }
};
StockDataComponent = __decorate([
    core_1.Component({
        selector: 'StockData',
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        template: ` <div>
    <h2>Stock Data</h2>
       <table class="table">
            <tr>
                <th>Stock Name</th>
                <th>Stock Type</th>
                <th>Price</th>
                <th>Volume</th>
            </tr>
            <tr *ngFor="let st of stockdata">
                <td>{{st.StockName}}</td>
                <td>{{st.StockType}}</td>
                <td>{{st.MarketPrice}}</td>
                <td>{{st.TotalVolume}}</td>
            </tr>
        </table>
</div>`,
    }),
    __metadata("design:paramtypes", [StockDataService_1.StockDataService, router_1.Router, common_1.Location])
], StockDataComponent);
exports.StockDataComponent = StockDataComponent;
//# sourceMappingURL=StockDataComponent.js.map