import { Injectable } from "@nestjs/common"

@Injectable()
export class BookService{
    addBook():string{
        return "Adding Book using Service"
    }

    deleteBook():string{
        return "Book Deleted Service"
    }

    updateBook():string{
        return "Book updated by Servcie"
    }

    findAllBook():string{
        return "All Book Found by Service"
    }
}