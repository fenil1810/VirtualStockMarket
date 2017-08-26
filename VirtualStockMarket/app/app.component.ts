import { Component, Input, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Router } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

@Component({
    selector: 'my-app',
    //templateUrl: './Content/index.html'
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    template: ` <div>
        <h1>Menu</h1>
    <a (click)="NavigateToPortfolio()">Portfolio</a>
    <router-outlet></router-outlet>
</div> `
})
export class AppComponent {
    location: Location;
    constructor(private _router: Router, location: Location) { this.location = location; }
    public NavigateToPortfolio() {
        this._router.navigate(['Portfolio']);

    }
}