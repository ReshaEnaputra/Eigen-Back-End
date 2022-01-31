import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Book } from './book.model';
import { BooksService } from './books.service';

@ApiTags('books')
@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) {}
    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }
    @Get(':id')
    @ApiParam({ name: 'id' })
    findOne(@Param() params): Promise<Book> {
        return this.bookService.findOne(params.id);
    }
    @Post()
    create(@Body() book: Book): Promise<Book> {
        return this.bookService.create(book);
    }
    @Delete('id')
    @ApiParam({ name: 'id' })
    destroy(@Param() params): Promise<Book> {
        return this.bookService.destroy(params.id);
    }
}
