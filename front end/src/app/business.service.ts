import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

	uri = 'http://localhost:4000/business';
  students_url = 'http://localhost:4000/students';

  constructor(private http: HttpClient) { }

  addBusiness(person_name,business_name,business_gst_number){
  	const obj={
  		person_name: person_name,
  		business_name: business_name,
  		business_gst_number: business_gst_number
  	};
  	console.log(obj);
  	this.http.post(`${this.uri}/add`, obj)
  		.subscribe(res => console.log('Done'));
  }

  addUsers(name,age,gender,profession){
    const data={
      name: name,
      age: age,
      gender: gender,
      profession:profession
    };
    console.log(data);
    this.http.post(`${this.students_url}/adding`, data)
    .subscribe(res=> console.log('Student Added Successfully'));
  }

  getBusinesses(){
    return this.http.get(`${this.uri}`);
  }

  editBusiness(id){
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateBusiness(person_name, business_name, business_gst_number,id){
    const obj={
      person_name:person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
      };
      this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
    }

    deleteBusiness(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
