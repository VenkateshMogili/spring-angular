import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class BookService {

	private api = 'http://localhost:8080/bookapi';

  constructor(private http: Http) { }

  getAllBooks(): Observable<Book[]>{
  	return this.http.get(`${this.api}/api/book`)
  		.map((response: Response) => response.json())
  		.catch(this.handleError);
  }

  addBook(book: Book){
  	let body = JSON.stringify(book);
  	let headers = new Headers({'Content-Type': 'application/json'});
  	let options = new RequestOptions({headers: headers});
  	if(book.id){
  		return this.http.put("http://localhost:8080/bookapi/api/book/"+book.id,body,options);
  	} else{
  		return this.http.post("http://localhost:8080/bookapi/api/book",body, options);
  	}
  }

  deleteBook(bookId: string){
  	return this.http.delete(`${this.api}/api/book/${bookId}`);
  }

  getBook(bookId: string): Observable<Book[]>{
  	return this.http.get("http://localhost:8080/bookapi/api/book/"+bookId)
  		.map((response: Response) => response.json())
  		.catch(this.handleError)
  }

  private handleError(error: Response){
  	return Observable.throw(error);
  }

  /*private handleError(error){
  let errorMessage = '';
  if(error.error instanceof ErrorEvent){
  	errorMessage = `Client side Error: ${error.error.message}`;
  } else{
  	errorMessage = `Server side Error code: ${error.status}\n Message: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
  }*/

}








