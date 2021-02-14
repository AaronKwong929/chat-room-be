import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser(): string[] {
        return [`1`, `2`, `3`];
    }
}
