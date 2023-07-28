import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: "Имя",
    })
    first_name: string;

    @ApiProperty({
        description: "Фамилия",
    })
    last_name: string;

    @ApiProperty({
        description: "Почита",
    })
    email: string;

    @ApiProperty({
        description: "Пароль",
    })
    password: string;
}
