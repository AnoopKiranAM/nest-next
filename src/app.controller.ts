import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")
export class BookController{

    //Nest js has provided me with the object
    constructor(private bookService:BookService){}

    @Post("/add")
    addBook():string{
        return this.bookService.addBook();
    }
    @Delete("/delete")
    deleteBook():string{
        return this.bookService.deleteBook();
    }

    @Put("/update")
    updateBook():string{
        return this.bookService.updateBook();
    }

    @Get("/findAll")
    findAllBook():string{
        return this.bookService.findAllBook();
    }
}