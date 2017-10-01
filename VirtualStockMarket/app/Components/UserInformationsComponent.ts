import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { UserInformations } from '../Models/UserInformations';
import { Login } from '../Models/Login';
import { RegisterService } from '../Service/UserInformationsService';
import 'rxjs/add/operator/switchMap';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';


@Component({
    selector: 'register',
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    template: ` <div>
        <table class="table">
        <tr>
					UserName:	    
				<input type="text" [(ngModel)]="user1.UserName" name="UserName"  placeholder="UserName" maxlength="50" required> 
                <br>
			
		</tr>
        <tr>
					Password:	    
				<input type="text" [(ngModel)]="user1.Password" name="Password"  placeholder="Password" maxlength="50" required> 
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
 <button (click)="Add(user)">Register</button>
    </table>
           
    </div>`,

})
export class RegisterComponent {
    private user: UserInformations[] = [];
    private login: Login[] = [];
    location: Location;
    public user1:UserInformations= new UserInformations();

    constructor(location: Location, private regService: RegisterService, private _router: Router, private http: Http) {
        this.location = location;
    }

    Add(elem) {
        console.log(elem);
        this.regService.Add(elem).then(data => {
            // this.refresh()
            this._router.navigate(['StockData']);
        })

    }
   /* Add(user) {
        var body = "UserName=" + user.UserName + "&Password=" + user.Password + "&FirstName=" + user.FirstName +
            "&LastName=" + user.LastName + "&HouseNo=" + user.HouseNo + "&Society=" + user.Society + "&Landmark=" + user.Landmark +
            "&Area=" + user.Area + "&City=" + user.City + "&State=" + user.State + "&Zipcode=" + user.Zipcode +
            "&Mobile=" + user.Mobile + "&Email=" + user.Email + "&Gender=" + user.Gender;        
        
        const body = JSON.stringify(user);
        this.http
            .post('api/Info/Create',
            body,
            { headers: new Headers({ "Content-Type": "application/json" }) })
            .map(response => response.json())
            .subscribe(json => {  });
    }*/
    /*
    refresh() {
        this.accountService.LoadData().then(data => {
            this.user = data;
        })
    }*/

}
