import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';


@Component({
    selector: 'trade',
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    template: ` <h2>Trade Tab</h2>`,

})
export class TradeComponent {
}
