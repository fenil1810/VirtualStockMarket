import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { PortfolioComponent } from './Components/PortfolioComponent';
import { FeedbackComponent } from './Components/FeedbackComponent';
import { TradeComponent } from './Components/TradeComponent';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';


export const appRoutes: Routes = [

    { path: '', redirectTo: ' ', pathMatch: 'full' },
    { path: 'Portfolio', component: PortfolioComponent },
    { path: 'Trade', component: TradeComponent },
    { path: 'Feedback', component: FeedbackComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), BrowserModule, FormsModule, HttpModule],
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    declarations: [AppComponent, PortfolioComponent,TradeComponent,FeedbackComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }