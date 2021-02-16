import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUser() {
        return this.userService.getUser();
    }

    @Get(`error`)
    getError() {
        return this.userService.getError();
    }

    @Get(`error2`)
    getError2() {
        return this.userService.getError2();
    }
}
