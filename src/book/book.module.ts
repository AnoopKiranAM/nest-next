import { Module } from "@nestjs/common";
import { BookService } from "src/book/book.service";
import { BookController } from "./book.controller";

@Module({
    imports: [],
    controllers: [BookController],
    providers: [BookService],
    exports:[]
  })
export class BookModule{}