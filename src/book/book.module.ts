import { Module } from "@nestjs/common";
import { BookService } from "src/book/book.service";

@Module({
    imports: [],
    controllers: [],
    providers: [BookService],
    exports:[]
  })
export class BookModule{}