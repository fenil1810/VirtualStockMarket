import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { StockData } from '../Models/StockData';
import { StockDataService } from '../Service/StockDataService';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';


@Component({
    selector: 'StockData',
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
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

})
export class StockDataComponent {

    location: Location;
    constructor(private stockdataService: StockDataService, private _router: Router, location: Location) {
        this.refresh();
        this.location = location;
    }

    private stockdata: StockData[] = [];
  
    refresh() {
        this.stockdataService.LoadData().then(data => {
            this.stockdata = data;
        })
    }

}
