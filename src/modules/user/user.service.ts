import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/entity/user.entity';
import { UserDTO } from './user.DTO';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    async createUser(userDTO: UserDTO): Promise<User> {
        const { name, password } = userDTO,
            user = this.usersRepository.create({ name, password });
        await this.usersRepository.save(user);
        return this.usersRepository.findOne({ name });
    }

    getUser(): Promise<User[]> {
        // return this.usersRepository.find({ where: `deleted = 0` });
        return this.usersRepository
            .createQueryBuilder('user')
            .select([`user.id`, `user.name`, `user.description`])
            .where('user.deleted = :deleted', { deleted: 0 })
            .getMany();
    }

    getError() {
        throw new HttpException(
            {
                status: HttpStatus.UNAUTHORIZED,
                error: `未鉴权`,
            },
            HttpStatus.UNAUTHORIZED
        );
    }

    getError2() {
        throw new Error(`123test123`);
    }
}
