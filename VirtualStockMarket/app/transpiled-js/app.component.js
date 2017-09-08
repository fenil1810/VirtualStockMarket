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
    NavigateToFeedback() {
        this._router.navigate(['Feedback']);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //templateUrl: './Content/index.html'
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        template: `<div class="fixed-nav" id="page-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav navbar-sidenav">
                <li class="nav-item active" data-toggle="tooltip" data-placement="right" title="Portfolio">
                    <a class="nav-link" href="#">
                        <i class="fa fa-fw fa-dashboard"></i>
                        <span class="nav-link-text">
                            Portfolio
                        </span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Graphs">
                    <a class="nav-link" href="#">
                        <i class="fa fa-fw fa-area-chart"></i>
                        <span class="nav-link-text">
                            Your Graphs
                        </span>
                    </a>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Trades">
                    <a class="nav-link" href="#">
                        <i class="fa fa-fw fa-area-chart"></i>
                        <span class="nav-link-text">
                            FeedBack
                        </span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Your Trades">
                    <a class="nav-link" href="#">
                        <i class="fa fa-fw fa-table"></i>
                        <span class="nav-link-text">
                            Your Trades
                        </span>
                    </a>
                </li>
                            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
                        <i class="fa fa-fw fa-sign-out"></i>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <div style="height:1200px;width:1100px" class="content-wrapper py-3">
    <h1>Menu</h1>
    <a (click)="NavigateToPortfolio()">Portfolio</a>
    <a (click)="NavigateToTrade()">Trade</a>
    <a (click)="NavigateToFeedback()">Feedback</a>
    <router-outlet></router-outlet>

        <div class="container-fluid">
            <!-- Breadcrumbs -->
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="#">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">My Dashboard</li>
            </ol>
            <!-- Icon Cards -->
        </div>
    </div>

    <!-- Area Chart Example -->
    <!-- /.content-wrapper -->
    <!-- Scroll to Top Button -->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fa fa-angle-up"></i>
    </a>
    <!-- Logout Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Select "Logout" below if you are ready to end your current session.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
   
</div>`
        /*template: ` <div>
            <h1>Menu</h1>
        <a (click)="NavigateToPortfolio()">Portfolio</a>
        <a (click)="NavigateToTrade()">Trade</a>
        <router-outlet></router-outlet>
    </div> `*/
    }),
    __metadata("design:paramtypes", [router_1.Router, common_1.Location])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map