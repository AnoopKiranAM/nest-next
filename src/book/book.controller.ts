import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("book")
export class BookController{
    constructor(private bookService:BookService){}

    @Get("/findAll")
    getAllBooks() : Book[]{
        return this.bookService.findAllBookService()
    }
    
    @Put("/update")
    updateBook(@Body() book:Book) : string{
        return this.bookService.updateBookService(book);
    }


    @Delete("/update")
    deleteBook(@Body() book:Book) : string{
        return this.bookService.updateBookService(book);
    }
}