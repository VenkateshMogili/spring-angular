import { Component, OnInit } from '@angular/core';
import { Book }  from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any = {};
  book: any = {};
  search: string;
  constructor(private _bookservice: BookService) { }

  getBooks(): void{
    console.log("getbooks method is calling...");
  	this._bookservice.getAllBooks()
  	.subscribe((data)=>{
  		this.books = data,
  		console.log(data);
  	},
  	 (error)=>{
  	 	console.log(error);
  	 });
  	}

  	private reset(){
  		this.book.author=null;
  		this.book.title=null;
  		this.book.id=null;
  	}


  	addBook(): void{
  		this._bookservice.addBook(this.book)
  		.subscribe((data) => {
  			console.log(data);
  			if(!this.book.id){
  				alert("New Book Added Successfully...");
  				this.reset();
  			} else{
  				alert("Updated Successfully...");
  				this.reset();
  			}
  			this.getBooks();
  		},(error)=> { 
  			console.log(error);
  		});
  	}

  	deleteBook(bookId: string){
  		let confirms = confirm("Are you sure want to delete?");
  		if(confirms){
	  		this._bookservice.deleteBook(bookId)
	  		.subscribe((response) => { 
	  			console.log(response);
	  			alert("Deleted Successfully..."); 
	  			this.getBooks();
	  		},(error)=>{ 
	  			console.log(error);
	  		});
  		}
  	}

  	editBook(bookId: string){
  		this._bookservice.getBook(bookId)
  			.subscribe((data)=> {this.book = data; this.getBooks();},
  			(error)=>{
  				console.log(error);
  			});
  	}


  ngOnInit() {
  this.getBooks();
  }


  	

}
