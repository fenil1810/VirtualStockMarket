"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const PortfolioComponent_1 = require("./Components/PortfolioComponent");
const FeedbackComponent_1 = require("./Components/FeedbackComponent");
const TradeComponent_1 = require("./Components/TradeComponent");
const StockDataComponent_1 = require("./Components/StockDataComponent");
const StockDataService_1 = require("./Service/StockDataService");
const PortfolioService_1 = require("./Service/PortfolioService");
const common_1 = require("@angular/common");
exports.appRoutes = [
    { path: '', redirectTo: ' ', pathMatch: 'full' },
    { path: 'Portfolio', component: PortfolioComponent_1.PortfolioComponent },
    { path: 'Trade', component: TradeComponent_1.TradeComponent },
    { path: 'Feedback', component: FeedbackComponent_1.FeedbackComponent },
    { path: 'StockData', component: StockDataComponent_1.StockDataComponent },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.appRoutes), platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        providers: [StockDataService_1.StockDataService, PortfolioService_1.PortfolioService, common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        declarations: [app_component_1.AppComponent, PortfolioComponent_1.PortfolioComponent, TradeComponent_1.TradeComponent, FeedbackComponent_1.FeedbackComponent, StockDataComponent_1.StockDataComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map