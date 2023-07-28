import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
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
