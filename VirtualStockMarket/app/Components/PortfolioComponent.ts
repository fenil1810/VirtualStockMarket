﻿import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { Portfolio } from '../Models/Portfolio';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../Service/PortfolioService';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';


@Component({
    selector: 'portfolio',
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
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

})
export class PortfolioComponent {

    location: Location;
    constructor(private portfolioService: PortfolioService, private _router: Router, location: Location) {
        this.refresh();
        this.location = location;
    }

    private portfolio: Portfolio[] = [];

    refresh() {
        this.portfolioService.LoadData().then(data => {
            this.portfolio = data;
        })
    }

}
