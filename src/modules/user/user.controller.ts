import { UserDTO } from './user.DTO';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
@Controller('user')
@ApiTags('用户模块')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiOperation({ summary: `获取用户列表` })
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

    @Post(`create`)
    @ApiOperation({ summary: `创建用户` })
    createUser(@Body() userDTO: UserDTO) {
        return this.userService.createUser(userDTO);
    }
}
