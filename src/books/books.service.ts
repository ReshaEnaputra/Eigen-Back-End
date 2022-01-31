import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book,
      ) {}

    async create(book: Book): Promise<Book> {
        return this.bookModel.create({book})
    }

    async findAll(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    async destroy(id: string): Promise<any> {
        const user = await this.findOne(id);
        await user.destroy();
    }

    async findOne(id: string): Promise<Book> {
        return this.bookModel.findOne({
            where: {
                id,
            },
        });
    }
}
