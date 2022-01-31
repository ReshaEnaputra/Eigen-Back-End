import { ApiProperty } from "@nestjs/swagger";
import { Column, Table, Model } from "sequelize-typescript";

@Table
export class User extends Model {
    @Column
    @ApiProperty()
    code: string;
    @Column
    @ApiProperty()
    name: string;
}