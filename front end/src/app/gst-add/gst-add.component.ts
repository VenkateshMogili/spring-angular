import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

	angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService, private router: Router) {
  	this.createForm();
  }

  createForm(){
  	this.angForm= this.fb.group({
  		person_name: ['',Validators.required],
  		business_name: ['',Validators.required],
  		business_gst_number: ['',Validators.required]
  	});
  }

  addBusiness(person_name,business_name,business_gst_number){
    this.bs.addBusiness(person_name,business_name,business_gst_number);
    alert(person_name+' Added successfully...');
    this.router.navigate(['business']);
  }
  
  ngOnInit() {
  }

}
