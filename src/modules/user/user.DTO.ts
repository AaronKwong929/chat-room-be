import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
    @ApiProperty({
        description: `用户账号`,
        required: true,
        example: ``,
        type: String,
    })
    name!: string;

    @ApiProperty({
        description: `密码`,
        required: true,
        example: ``,
        type: String,
    })
    password!: string;
}
