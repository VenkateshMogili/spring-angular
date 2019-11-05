import { Component, OnInit } from '@angular/core';
import  Business from '../Business';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

	profiles: Business[];
  constructor(private bs: BusinessService) { }

  getProfiles(){
  	this.bs.getBusinesses().subscribe((data: Business[])=>{
  		this.profiles = data;
  		console.log('data'+ this.profiles);
  	});
  }

  ngOnInit() {
  	this.getProfiles();
  }


}
