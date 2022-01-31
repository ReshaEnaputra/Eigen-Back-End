import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
      ) {}

    async create(user: User): Promise<User> {
        return this.userModel.create({user})
    }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }
    
    async destroy(id: string): Promise<any> {
        const user = await this.findOne(id);
        await user.destroy();
    }
}
