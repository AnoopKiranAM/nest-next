import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { BookService } from './book.service';
import { ChatModule } from './chat.module';
import { OrdersModule } from './orders.module';
import { UsersModule } from './users.module';


@Module({
  imports: [UsersModule,OrdersModule,ChatModule],
  controllers: [BookController],
  providers: [BookService],
  exports:[]
})
export class RootModule {
  constructor(){
console.log("root module")
  }
}
