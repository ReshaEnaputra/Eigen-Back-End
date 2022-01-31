import { ApiProperty } from "@nestjs/swagger";
import { Column, Table, Model } from "sequelize-typescript";

@Table
export class Book extends Model {
    @Column
    @ApiProperty()
    code: string;
    @Column
    @ApiProperty()
    title: string;
    @Column
    @ApiProperty()
    author: string;
    @Column
    @ApiProperty()
    stock: number;
}