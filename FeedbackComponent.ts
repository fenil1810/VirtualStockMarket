import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

@Component({
                selector: 'Feedback',
                providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
                template: '<h2>Your Feedback Here</h2>',
        })
export class FeedbackComponent{
}
