package com.mogili.spring.dao;

import java.util.List;

import com.mogili.spring.model.Book;

public interface BookDAO {
	
	//save the record
	long save(Book book);
	
	//get a single record
	Book get(long id);
	
	//get all the records
	
	List<Book> list();
	
	//update the record
	
	void update(long id, Book book);
	
	//delete a record
	void delete(long id);
	
	

}
