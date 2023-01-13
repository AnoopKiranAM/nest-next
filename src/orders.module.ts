import { Module } from '@nestjs/common';
import { Feature1 } from './feature1.module';
import { Feature2 } from './feature2.module';


@Module({
  imports: [Feature1,Feature2],
  controllers: [],
  providers: [],
})
export class OrdersModule {
  constructor(){
console.log("OrdersModule")
  }
}
