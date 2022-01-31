import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
    imports: [SequelizeModule.forFeature([Book])],
    controllers: [BooksController],
    providers: [BooksService],
    exports: [SequelizeModule]
})
export class BooksModule {}
