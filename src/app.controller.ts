import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("book")
export class BookController{

    @Post("/add")
    addBook():string{
        return "Book Added"
    }
    @Delete("/delete")
    deleteBook():string{
        return "Book Deleted"
    }

    @Put("/update")
    updateBook():string{
        return "Book updated"
    }

    @Get("/findAll")
    findAllBook():string{
        return "All Book Found"
    }

    @Get("/findBookById/:bookId")
    findBookById(@Param() params):string{
        return `This will find the book with the Book ID #${params.bookId}`;
    }
}