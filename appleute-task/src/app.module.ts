import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { ProductController } from './product/product.controller';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    OrdersModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://test:test@testing101.8jqxwpu.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController, UsersController, ProductController],
  providers: [AppService],
})
export class AppModule {}
