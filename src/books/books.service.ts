import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  books= [{id: 1,
    title: "Valami",
    author: "valaki",
    isbn: "asdas",
    publishYear: 2010,
    reserved: false},
    {id: 2,
      title: "Ki",
      author: "Mindernki",
      isbn: "sdas",
      publishYear: 2199,
      reserved: false}];
  //nextId= id+1;
  create(createBookDto: CreateBookDto) {
    let id = 0;
    if(this.books.length>0){
      id= this.books[this.books.length-1].id+1;
    }
    this.books.push(new Book(id, createBookDto.title, createBookDto.title, createBookDto.isbn, createBookDto.publishYear, false ))
    return 201;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books[(id-1)];
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const book = this.books.find(e=>e.id==id);
    if(book){
      if(updateBookDto.author){
        book.author= updateBookDto.author;
      }
      if(updateBookDto.isbn){
        book.isbn= updateBookDto.isbn;
      };
      if(updateBookDto.publishYear){
        book.publishYear= updateBookDto.publishYear;
      };
      if(updateBookDto.reserved){
        book.reserved= updateBookDto.reserved;
      };
      if(updateBookDto.title){
        book.title= updateBookDto.title;
      };
      
      return 200;
    }

    return 404;
  }

  remove(id: number) {
    const index= this.books.findIndex(e=>e.id==id);
    if(index==-1){
      return 404;
    }
    this.books.splice(index,1)
    return 204;
  }
  
}
