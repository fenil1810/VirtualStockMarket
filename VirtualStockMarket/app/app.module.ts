import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { PortfolioComponent } from './Components/PortfolioComponent';
import { TradeComponent } from './Components/TradeComponent';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';


export const appRoutes: Routes = [

    { path: '', redirectTo: ' ', pathMatch: 'full' },
    { path: 'Portfolio', component: PortfolioComponent },
    { path: 'Trade', component: TradeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), BrowserModule, FormsModule, HttpModule],
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    declarations: [AppComponent, PortfolioComponent,TradeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }