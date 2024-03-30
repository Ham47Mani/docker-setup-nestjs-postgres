import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmCOnfig } from './utils/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmCOnfig) ,UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
