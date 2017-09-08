import { Component, Input, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Router } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

@Component({
    selector: 'my-app',
    //templateUrl: './Content/index.html'
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    template:`<div class="fixed-nav" id="page-top">
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
    <a (click)="NavigateToFeedback()">Feedback</a>
    <router-outlet></router-outlet>
</div> `*/
})
export class AppComponent {
    location: Location;
    constructor(private _router: Router, location: Location) { this.location = location; }
    public NavigateToPortfolio() {
        this._router.navigate(['Portfolio']);

    }

    public NavigateToTrade() {
        this._router.navigate(['Trade']);

    }
    public NavigateToFeedback() {
        this._router.navigate(['Feedback']);

    }

}