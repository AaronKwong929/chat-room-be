import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './../../entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    getUser(): Promise<User[]> {
        return this.usersRepository.find();
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
