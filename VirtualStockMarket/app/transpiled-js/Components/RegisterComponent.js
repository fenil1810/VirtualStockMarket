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
const RegisterService_1 = require("../Service/RegisterService");
require("rxjs/add/operator/switchMap");
const common_1 = require("@angular/common");
let RegisterComponent = class RegisterComponent {
    constructor(location, regService, _router) {
        this.regService = regService;
        this._router = _router;
        this.user = [];
        this.login = [];
        this.location = location;
    } /*
    refresh() {
        this.accountService.LoadData().then(data => {
            this.user = data;
        })
    }*/
    Add(elem) {
        console.log(elem);
        this.regService.Add(elem).then(data => {
            // this.refresh()
            this._router.navigate(['StockData']);
        });
    }
};
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        template: ` <div>
        <table class="table">
        <tr>
					UserName:	    
				<input type="text" [(ngModel)]="login.UserName" name="UserName"  placeholder="UserName" maxlength="50" required> 
                <br>
			
		</tr>
        <tr>
					Password:	    
				<input type="text" [(ngModel)]="login.Password" name="Password"  placeholder="Password" maxlength="50" required> 
                <br>
			
		</tr>
        <tr>
					FirstName:	    
				<input type="text" [(ngModel)]="user.FirstName" name="FirstName"  placeholder="FirstName" maxlength="50" required> 
                <br>
			
		</tr>
        <tr>
					LastName:	    
				<input type="text" [(ngModel)]="user.LastName" name="LastName"  placeholder="LastName" maxlength="50" required> 
                <br>
			
		</tr>
        <tr>
					HouseNo:	    
				<input type="text" [(ngModel)]="user.HouseNo" name="HouseNo"  placeholder="HouseNo" maxlength="50" required> 
                <br>
			
		</tr>
        <tr>
					Society:	    
				<input type="text" [(ngModel)]="user.Society" name="Society"  placeholder="Society" maxlength="50" required> 
                <br>
			
		</tr> 
        <tr>
					Landmark:	    
				<input type="text" [(ngModel)]="user.Landmark" name="Landmark"  placeholder="Landmark" maxlength="50" required> 
                <br>
			
		</tr>
	    <tr>
					Area:	    
				<input type="text" [(ngModel)]="user.Area" name="Area"  placeholder="Area" maxlength="20" required>
                <br>
			
		</tr>
    	<tr>
					City:	    
				<input type="text"  max=20 [(ngModel)]="user.City" name="City"  placeholder="City"  required><br>
			
		</tr>
        
        <tr>
					State:	    
				<input type="text" [(ngModel)]="user.State" name="State"  placeholder="State" maxlength="50" required> 
                <br>
			
		</tr> 
        <tr>
					Zipcode:	    
				<input type="number" [(ngModel)]="user.Zipcode" name="Zipcode"  placeholder="Zipcode" maxlength="6" required> 
                <br>
			
		</tr>
	    <tr>
					Mobile:	    
				<input type="number" [(ngModel)]="user.Mobile" name="Mobile"  placeholder="Mobile" maxlength="10" required>
                <br>
			
		</tr>
    	<tr>
				Email:	    
				<input type="email"   [(ngModel)]="user.Email" name="Email"  placeholder="Email" maxlength=50 required><br>
			
		</tr>

    	<tr>
				Gender:	    
				<input type="text"   [(ngModel)]="user.Gender" name="Gender"  placeholder="Gender" maxlength=1 required><br>
			
		</tr>				
    </table>
    <button (click)="Add(user)">Register</button>
    </div>`,
    }),
    __metadata("design:paramtypes", [common_1.Location, RegisterService_1.RegisterService, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=RegisterComponent.js.map