import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
	angForms: FormGroup;
  constructor(private bs: BusinessService,private fb: FormBuilder) { 
  this.createForm();
  }

  createForm(){
  	this.angForms= this.fb.group({
  		name: ['',Validators.required],
  		age: ['',Validators.required],
  		gender: ['',Validators.required],
  		profession: ['',Validators.required]
  	});
  }


  addUser(name,age,gender,profession){
  	this.bs.addUsers(name,age,gender,profession);
  	alert('User Added successfully...');
  }

  ngOnInit() {
  }

}
